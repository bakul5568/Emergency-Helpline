// Heart Count
let heartcount = 0;
const heartButton = document.querySelectorAll('.service-review');
for(const heartBtn of heartButton){
    heartBtn.addEventListener('click', function(e) {
        e.preventDefault()
        heartcount++;
        document.getElementById("heart-count").innerText = heartcount;
    })
}

// Copy Button
let copycount = 0;
const copyCount = document.querySelectorAll('.copy-button')
    for(const copybtn of copyCount){
        copybtn.addEventListener('click', function(e){
        e.preventDefault()
        copycount++;
        document.getElementById('copy-count').innerText = copycount;
           
    })
}

const copyButton = document.querySelectorAll('.copy-button')
for(const btn of copyButton){
  btn.addEventListener('click', function(){
    const card = btn.closest('.card')
    const textNumber = card.querySelector('.service-number').innerText
    navigator.clipboard.writeText(textNumber)
    alert('The number has been copied :' +textNumber  )

   
  })
    
}

// Call Service
let coins = 100;
const history = []

const callButtons = document.querySelectorAll('.call-button');
const callHistory = document.getElementById('call-history');
const coinDisplay = document.getElementById('coin-display');


for (const btn of callButtons) {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const card = btn.closest('.card');
        const serviceName = card.querySelector('.service-name').innerText;
        const serviceNumber = card.querySelector('.service-number').innerText;

        if ( coins < 20) {
            alert("Not enough coins");
            return;
        }
        coins -= 20;
        coinDisplay.innerText = coins;
        alert(`Calling ${serviceName}  ${ serviceNumber}...`);

        
        const data = {
            name: serviceName,
            number: serviceNumber,
            date: new Date().toLocaleTimeString()
        };
        
        history.push(data);

        
        callHistory.innerText = "";
        for (const item of history) {
            const div = document.createElement('div');
            div.innerHTML = `
                    <div class=" mt-2 p-2 shadow-md flex justify-between items-center">
                        <div class="">
                            <h1 class="font-semibold text-md">${item.name}</h1>
                            <p class="font-normal text-sm">${item.number}</p>
                        </div>
                        <div>
                            <p class="font-normal text-sm">${item.date}</p>
                        </div>
                    </div>
            `;
            callHistory.appendChild(div);
        }
    });
}
//  clear button
 document.getElementById(`clear-button`)
.addEventListener('click', function(e){
    e.preventDefault()
    callHistory.innerText = ""
})