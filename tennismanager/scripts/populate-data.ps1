param(
    [switch] $all, # Create all
    [int] $noc, # Number of customers to create
    [int] $nos, # Number of sessions to create
    [switch] $r, # Random Customer Data
    [switch] $v # Verbose
)


# CONSTANTS
$baseUrl = "https://localhost:7168/api"

$customerUrl = "$baseUrl/customers"
$createCustomerUrl = "$customerUrl/create"

$sessionUrl = "$baseUrl/sessions"
$createSessionUrl = "$sessionUrl/create"

$headers = @{
    "Content-Type" = "application/json"
} 

# FUNCTIONS
function Create-RandomCustomer {
    param(
        [int]$index
    )
    
    $firstNames = @("John", "Jane", "Bob", "Sue", "Mike", "Jill", "Tom", "Sally", "Tim", "Tina")
    $lastNames = @("Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor")
    $email = "student" + $index + "@hope.edu"
    $firstName = Get-Random -InputObject $firstNames
    $lastName = Get-Random -InputObject $lastNames
    $phone = "616-555-" + (Get-Random -Minimum 1000 -Maximum 9999)
    return @($firstName, $lastName, $email, $phone)
}

function Generate-Date {
    param (
        [int]$index
    )

    # Base date from which to calculate
    $baseDate = Get-Date "2001-05-01"

    # Calculate the new date by adding the index as days to the base date
    $newDate = $baseDate.AddDays($Index)

    # Output the new date
    return $newDate
}

# MAIN
if ($all) {
    $noc = 50
    $nos = 50
}


try {
    for ($i = 0; $i -lt $noc; $i++) {
        Write-Progress -Activity "Creating Customers" -Status "Creating Customer $i of $noc" -PercentComplete ($i / $noc * 100) 
        if ($v) {
            Write-Host "Creating customer $i of $noc"
        }

        if ($r) {
            $customer = Create-RandomCustomer
            $body = @{
                "type"  = "customer"
                "first" = $customer[0]
                "last"  = $customer[1]
                "email" = $customer[2]
                "phone" = $customer[3]
            } | ConvertTo-Json
        }
        else {
            $body = @{
                "type"  = "customer"
                "first" = "$i"
                "last"  = "F"
                "email" = "SomeEmail@hope.edu"
            } | ConvertTo-Json
        }

       
        $response = Invoke-WebRequest -Uri $createCustomerUrl -Method Post -Body $body -Headers $headers
        if ($v) {
            ($response | ConvertFrom-Json) | Format-List | Out-String
        }
    }
}
catch {
    Write-Host "Error creating customers: $_"
    exit 0
}


try {
    for ($i = 0; $i -lt $nos; $i++) {
        Write-Progress -Activity "Creating Sessions" -Status "Creating Session $i of $nos" -PercentComplete ($i / $nos * 100) 
        if ($v) {
            Write-Host "Creating session $i of $nos"
        }

        $body = @{
            "type" = "event"
            "date" = Generate-Date -Index $i
            "time" = (Get-Date).ToString("HH:mm:ss")
        } | ConvertTo-Json

        $response = Invoke-WebRequest -Uri $createSessionUrl -Method Post -Body $body -Headers $headers
        if ($v) {
            ($response | ConvertFrom-Json) | Format-List | Out-String
        }
    }
}
catch {
    Write-Host "Error creating sessions: $_"
    exit 0
}