document.addEventListener("DOMContentLoaded", function ()  {
    var form = document.querySelector(".registerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        var amount = parseFloat(form.elements.amount.value);
        var exchange = form.elements.exchange.value;

        if (isNaN(amount)) {
            alert("اenter a valid value for quantity");
            return;
        }

        var result;
        switch (exchange) {
            case "dollar":
                result = amount * 3.75; 
                break;
            case "dinar":
                result = amount * 4.25; 
                break;
            case "nis":
                result = amount * 1.20; 
                break;
                
                default:
                    alert("Unknown exchange unit");
                    return;
            }
    
            var resultElement = document.querySelector(".result");
            resultElement.textContent = "value: " + result.toFixed(2); 
        }
    );
    }
);