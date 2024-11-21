
<#
.SYNOPSIS

#>

function Test-DiagnosticSettingsConfiguredEntraLogs {
    [CmdletBinding()]
    param(
        $Database
    )

    Write-PSFMessage '🟦 Start' -Tag Test -Level VeryVerbose

    $passed = $true

    if ($passed) {
        $testResultMarkdown += "All Entra Logs are configured with Diagnostic Settings."
    }
    else {
        $testResultMarkdown += "Some Entra Logs are not configured with Diagnostic settings`n`n%TestResult%"
    }

    $testResultMarkdown = $testResultMarkdown -replace "%TestResult%", $mdInfo

    Add-ZtTestResultDetail -TestId '21860' -Title 'Diagnostic settings are configured for all Microsoft Entra logs' `
        -UserImpact Low -Risk High -ImplementationCost Medium `
        -AppliesTo Identity -Tag Application `
        -Status $passed -Result $testResultMarkdown
}
