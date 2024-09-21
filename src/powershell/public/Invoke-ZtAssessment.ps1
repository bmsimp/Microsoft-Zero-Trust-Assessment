<#
.SYNOPSIS
Runs the Zero Trust Assessment against the signed in tenant and generates a report of the findings.

.DESCRIPTION
This function is only a sample Advanced function that returns the Data given via parameter Data.

.EXAMPLE
Invoke-ZeroTrustAssessment

Run the Zero Trust Assessment against the signed in tenant and generates a report of the findings.
#>

function Invoke-ZtAssessment {
    [Alias('Invoke-ZeroTrustAssessment')]
    [CmdletBinding()]
    param (
        # The path to the folder folder to output the report to. If not specified, the report will be output to the current directory.
        [string]
        $Path = "./ZeroTrustReport",

        # Optional. Number of days (between 1 and 30) to query sign-in logs. Defaults to last two days.
        [ValidateScript({
                $_ -ge 1 -and $_ -le 30
            },
            ErrorMessage = "Logs are only available for 30 days. Please enter a number between 1 and 30.")]
        [int]
        $Days = 30,

        # Optional. The maximum time (in minutes) the assessment should spend on querying sign-in logs. Defaults to collecting sign logs for 60 minutes. Set to 0 for no limit.
        [int]
        $MaximumSignInLogQueryTime = 60,

        # If specified, the previously exported data will be used to generate the report.
        [switch]
        $Resume
    )

    $banner = @"
+-------------------------------------------------------------+
| Microsoft Zero Trust Assessment v2.0                        |
+-------------------------------------------------------------+
"@
    Write-Host $banner -ForegroundColor Cyan

    $exportPath = Join-Path $Path "zt-export"

    # Stop if folder has items inside it
    if (!$Resume.IsPresent -and (Test-Path $Path)) {
        if ((Get-ChildItem $Path).Count -gt 0) {
            # Prompt user if it's okay to delete the folder and get confirmation
            Write-Host "`nFolder $Path is not empty. Do you want to delete the contents and continue (y/n)?" -ForegroundColor Yellow -NoNewline
            $deleteFolder = Read-Host
            if ($deleteFolder -eq "y") {
                Remove-Item -Path $Path -Recurse -Force -ErrorAction Stop | Out-Null
            }
            else {
                Write-Error "Folder $Path is not empty. Please provide a path to an empty folder."
                return
            }
        }
    }

    if (!(Test-ZtContext)) {
        return
    }

    Clear-ZtModuleVariable # Reset the graph cache and urls to avoid stale data

    Write-Verbose 'Creating report folder $Path'
    New-Item -ItemType Directory -Path $Path -Force -ErrorAction Stop | Out-Null

    # Collect data
    Export-TenantData -ExportPath $exportPath -Days $Days -MaximumSignInLogQueryTime $MaximumSignInLogQueryTime
    $db = Export-Database -ExportPath $exportPath

    # Run the tests
    Invoke-ZtTests -Database $db
    Invoke-ZtTenantInfo -Database $db

    $assessmentResults = Get-ZtAssessmentResults

    Disconnect-Database -Db $db

    $assessmentResultsJson = $assessmentResults | ConvertTo-Json -Depth 10
    $resultsJsonPath = Join-Path $Path "ZeroTrustAssessmentReport.json"
    $assessmentResultsJson | Out-File -FilePath $resultsJsonPath

    Write-ZtProgress -Activity "Creating html report"
    $htmlReportPath = Join-Path $Path "ZeroTrustAssessmentReport.html"
    $output = Get-HtmlReport -AssessmentResults $assessmentResultsJson -Path $Path
    $output | Out-File -FilePath $htmlReportPath -Encoding UTF8

    Write-Host
    Write-Host "🛡️ Zero Trust Assessmet report generated at $htmlReportPath" -ForegroundColor Green
    Write-Host
    Invoke-Item $htmlReportPath | Out-Null
}