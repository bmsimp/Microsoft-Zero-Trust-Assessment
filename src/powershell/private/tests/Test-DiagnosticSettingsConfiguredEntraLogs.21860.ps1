
<#
.SYNOPSIS
    Tests if all Entra Logs are configured with Diagnostic Settings.
#>

function Test-DiagnosticSettingsConfiguredEntraLogs {
    [CmdletBinding()]
    param()

    Write-PSFMessage '🟦 Start' -Tag Test -Level VeryVerbose

    $azAccessToken = ((Get-AzAccessToken).Token | ConvertTo-SecureString -AsPlainText)
    $result = Invoke-WebRequest -Uri 'https://management.azure.com/providers/microsoft.aadiam/diagnosticsettings?api-version=2017-04-01-preview' -Authentication Bearer -Token $azAccessToken

    $diagnosticSettings = $result.Content | ConvertFrom-Json
    $enabledLogs = $diagnosticSettings.value.properties.logs | Where-Object { $_.enabled } | Select-Object -ExpandProperty category -Unique

    $logsToCheck = @(
        "AuditLogs",
        "SignInLogs",
        "NonInteractiveUserSignInLogs",
        "ServicePrincipalSignInLogs",
        "ManagedIdentitySignInLogs",
        "ProvisioningLogs",
        "ADFSSignInLogs",
        "RiskyUsers",
        "UserRiskEvents",
        "NetworkAccessTrafficLogs",
        "RiskyServicePrincipals",
        "ServicePrincipalRiskEvents",
        "EnrichedOffice365AuditLogs",
        "MicrosoftGraphActivityLogs",
        "RemoteNetworkHealthLogs"
    )

    $missingLogs = $logsToCheck | Where-Object { $_ -notin $enabledLogs }


    $passed = $null -eq $missingLogs

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
