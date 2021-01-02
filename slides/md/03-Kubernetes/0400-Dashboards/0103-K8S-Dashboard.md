# Kubernetes Dashboards

-----

### Kubernetes Dashboards

- In this section we will create K8S dashboards
- For the dashboard we will need the following:
    - Namespace
    - User
    - Service Account
    - Grant permissions
    - Login

---

### Namespace
- First lets create the desired namespace
- Namespace are used to have a clean environment
```yaml
apiVersion: v1
kind: Namespace
metadata:
    name: codewizard-dashboard
```
---
### Service Account
- Service account will be used for authenticating the user
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: codewizard-admin
  namespace: codewizard-dashboard
```
---
### ClusterRoleBinding
- `Role-based access control (RBAC)` is a method of regulating access resources based on the `roles` of users within
- In the RBAC API, a role contains rules that represent a set of permissions. 
    - Permissions are purely additive (there are no “deny” rules). 
    - A role can be defined within a namespace with a `Role`, or cluster-wide with a `ClusterRole`
- Here we will create `ClusterRoleBinding` for our resources

---

```yaml
# Create a ClusterRoleBinding for our prevoius ServiceAccount
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  # The same user name we created in the service acount
  name: codewizard-admin

# Define the set of the desired rules
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: codewizard-cluster-admin
# subjects (users, groups, or service accounts)
# In our case we wish to define role for our ServiceAccount
subjects:
  - kind: ServiceAccount
    name: codewizard-admin
    namespace: codewizard-dashboard
```
---

# Bearer Token
- `Bearer authentication` (also called token authentication) is an HTTP authentication scheme that involves security tokens called bearer tokens.
- The name “Bearer authentication” can be understood as “give access to the bearer of this token.” 
- The bearer token is a cryptic string, usually generated by the server in response to a login request. 
- The client must send this token in the Authorization header when making requests to protected resources.
    ```sh
    # For Bash: (Unix)
    kubectl -n codewizard-dashboard describe secret $(kubectl -n codewizard-dashboard get secret | grep codewizard-admin | awk '{print $1}')

    # For Powershell (someone have to use windows....)
    kubectl -n codewizard-dashboard describe secret $(kubectl -n codewizard-dashboard get secret | sls codewizard-admin | ForEach-Object { $_ -Split '\s+' } | Select -First 1)
    ```
- Copy the token