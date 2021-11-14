const years = document.getElementById('years')
const rate = document.getElementById('rate')
const loan = document.getElementById('loan')
const tax = document.getElementById('tax')
const insurance = document.getElementById('insurance')
const button = document.getElementById('button')
const total = document.getElementById('total')
const principalRes = document.getElementById('principalRes')
const taxRes = document.getElementById('taxRes')
const insuranceRes = document.getElementById('insuranceRes')
const yearShow = document.getElementById('yearShow')
const rateShow = document.getElementById('rateShow')
const loanError = document.getElementById('loan-error')
const taxError = document.getElementById('tax-error')
const insuranceError = document.getElementById('insurance-error')



const newArray = [years,rate,loan,tax,insurance]

const DTO = {
    years:30,rate:1.8,loan:0,tax:0,insurance:0
}



const changeInput = (e,type) => {
    DTO[type] = e.target.value
    console.log(type)
    if(type === 'years') {
        console.log(e.target.value)
        yearShow.value= e.target.value
    } else if (type === 'rate') {
      rateShow.value = e.target.value
    }
}

const calculate = () => {
    if(DTO.loan === 0) {
        console.log('here')
      loanError.style.display = "block"
      loan.classList.add('error')
    } else if(DTO.tax === 0) {
        taxError.style.display = "block"
        tax.classList.add('error')
    } else if(DTO.insurance === 0) {
        insuranceError.style.display = "block"
        insurance.classList.add('error')
    } else {
        loanError.style.display = "none"
        taxError.style.display = "none"
        insuranceError.style.display = "none"
        loan.classList.remove('error')
        tax.classList.remove('error')
        insurance.classList.remove('error')
        let principle = Math.round((DTO.rate / 100) / 12)* DTO.loan / (1-Math.pow((1 + ((DTO.rate / 100)/12)), -DTO.years*12)) 
        principalRes.innerHTML = `$${principle}`
        let taxCal = Math.round(DTO.tax/12)
        taxRes.innerHTML = `$${taxCal}`
        let insuranceCal = Math.round(DTO.insurance/12)
        insuranceRes.innerHTML = `$${insuranceCal}`
        let monthly = principle + taxCal + insuranceCal
        total.innerHTML = `$${monthly}`
    }

}

newArray.forEach(type=> {
    type.addEventListener('change',(e)=> changeInput(e,type.id))
})


button.addEventListener('click',calculate)



