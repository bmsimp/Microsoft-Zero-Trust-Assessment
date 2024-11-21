External user accounts are often used to provide access to business partners who belong to organizations that have a business relationship with your organization. If these accounts are compromised in their organization, attackers can use them as valid credentials to gain initial access to your environment, often bypassing traditional defenses due to their legitimacy.

Attackers might still gain access with external user accounts, if MFA isn't universally enforced or if there are exceptions in place. They might also gain access by exploiting the vulnerabilities of weaker MFA methods like SMS and phone calls using social engineering techniques, such as SIM swapping or phishing, to intercept the authentication codes.

Attackers might target external accounts where MFA isn't enforced or use weaker MFA methods, using these accounts as entry points into the tenant. Once an attacker gains access to an account without MFA or a session with weak MFA methods, they might attempt to manipulate MFA settings (for example, registering attacker controlled methods) to establish persistence to plan and execute further attacks based on the privileges of the compromised accounts.

**Remediation action**

- [Deploy Conditional Access policies to enforce authentication strength for guests](https://learn.microsoft.com/entra/identity/conditional-access/policy-guests-mfa-strength).
- For organizations with a closer business relationship and vetting on their MFA practices, consider deploying cross-tenant access settings to accept the MFA claim.
   - [Configure B2B collaboration cross-tenant access settings](https://learn.microsoft.com/entra/external-id/cross-tenant-access-settings-b2b-collaboration#to-change-inbound-trust-settings-for-mfa-and-device-claims)
<!--- Results --->
%TestResult%
