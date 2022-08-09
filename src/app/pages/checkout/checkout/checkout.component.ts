import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart-service/cart.service';
import { ProductsApisService } from 'src/app/services/api-services/products-apis.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cart
  public states = [
    { state: "Alaska", tax: 1.76 },
    { state: "Alabama", tax: 9.24 },
    { state: "Arkansas", tax: 9.47 },
    { state: "Arizona", tax: 8.4 },
    { state: "California", tax: 8.82 },
    { state: "Colorado", tax: 7.77 },
    { state: "Connecticut", tax: 6.35 },
    { state: "Delaware", tax: 0 },
    { state: "Florida", tax: 7.01 },
    { state: "Georgia", tax: 7.35 },
    { state: "Hawaii", tax: 4.44 },
    { state: "Idaho", tax: 6.02 },
    { state: "Illinois", tax: 8.81 },
    { state: "Indiana", tax: 7 },
    { state: "Iowa", tax: 6.94 },
    { state: "Kansas", tax: 8.7 },
    { state: "Kentucky", tax: 6 },
    { state: "Louisiana", tax: 9.55 },
    { state: "Maine", tax: 5.5 },
    { state: "Maryland", tax: 6 },
    { state: "Massachusetts", tax: 6.25 },
    { state: "Michigan", tax: 6 },
    { state: "Minnesota", tax: 7.49 },
    { state: "Mississippi", tax: 7.07 },
    { state: "Missouri", tax: 8.29 },
    { state: "Montana", tax: 0 },
    { state: "Nebraska", tax: 6.94 },
    { state: "Nevada", tax: 8.23 },
    { state: "New Hampshire", tax: 0 },
    { state: "New Jersey", tax: 6.6 },
    { state: "New Mexico", tax: 7.84 },
    { state: "New York", tax: 8.52 },
    { state: "North Carolina", tax: 6.98 },
    { state: "North Dakota", tax: 6.96 },
    { state: "Ohio", tax: 7.22 },
    { state: "Oklahoma", tax: 8.97 },
    { state: "Oregon", tax: 0 },
    { state: "Pennsylvania", tax: 6.34 },
    { state: "Rhode Island", tax: 7 },
    { state: "South Carolina", tax: 7.44 },
    { state: "South Dakota", tax: 6.40 },
    { state: "Tennessee", tax: 9.55 },
    { state: "Texas", tax: 8.20 },
    { state: "Utah", tax: 7.19 },
    { state: "Vermont", tax: 6.24 },
    { state: "Virginia", tax: 5.75 },
    { state: "Washington", tax: 9.29 },
    { state: "West Virginia", tax: 6.52 },
    { state: "Wisconsin", tax: 5.43 },
    { state: "Wyoming", tax: 5.22 }

  ]

  constructor(private cartService: CartService, private fb: FormBuilder, private productsApis: ProductsApisService) {

  }

  public orderId
  public orderTotal
  public loaded = false
  public salesTax = 0
  public stage = 'shipping'
  public orderSuccess;
  public serviceFee = 0

  async ngOnInit() {
    this.cart = await this.cartService.getCart()
    this.orderTotal = this.cart.total + this.salesTax
    this.serviceFee = environment.serviceFee
    this.loaded = true
  }

  validFirstName = true
  validLastName = true
  validEmail = true
  validAddress = true
  validCity = true
  validCountry = true
  validState = true
  validZip = true
  validPhone = true
  validShippingAccountNumber = true;
  public checkForm() {
    let checkoutForm = document.getElementById("checkoutForm")
    if(!checkoutForm["firstName"].value) { this.validFirstName = false }
    if(!checkoutForm["lastName"].value) { this.validLastName = false }
    if(!checkoutForm["email"].value) { this.validEmail = false }
    if(!checkoutForm["city"].value) { this.validCity = false }
    if(!checkoutForm["address"].value) { this.validAddress = false }
    if(!checkoutForm["country"].value) { this.validCountry = false }
    if(!checkoutForm["state"].value) { this.validState = false }
    if(!checkoutForm["zip"].value) { this.validZip= false }
    if(!checkoutForm["phone"].value) { this.validPhone = false }
    if(!checkoutForm["shippingAccountNumber"].value) { this.validShippingAccountNumber = false }
  }

  public resetFormField(field) {
    if (field === 'firstName') {this.validFirstName = true}
    if (field === 'lastName') {this.validLastName = true}
    if (field === 'email') {this.validEmail = true}
    if (field === 'city') {this.validCity = true}
    if (field === 'address') {this.validAddress = true}
    if (field === 'country') {this.validCountry = true}
    if (field === 'state') {this.validState = true}
    if (field === 'zip') {this.validZip = true}
    if (field === 'phone') { this.validPhone = true }
    if (field === 'shippingAccountNumber') { this.validShippingAccountNumber = true }
  }

  public salesTaxPercent
  public checkoutData
  public updateSalesTax(selectedState) {
    let tax = 0
    let state = this.states.find(state => state.state === selectedState
    )
    tax = state.tax / 100
    this.salesTaxPercent = state.tax
    this.salesTax = this.cart.total * tax
    this.orderTotal = this.cart.total + this.salesTax
    this.orderTotal += this.orderTotal * (this.serviceFee / 100)
  }

  public continueToPayment() {
    let form = document.getElementById("checkoutForm")
    if (
      form["firstName"].value === "" ||
      form["lastName"].value === "" ||
      form["email"].value === "" ||
      form["address"].value === "" ||
      form["city"].value === "" ||
      form["country"].value === "" ||
      form["state"].value === "" ||
      form["zip"].value === "" ||
      form["phone"].value === "" ||
      form["shippingAccountNumber"].value === ""
    ) {
      this.checkForm()
    } else {
      this.checkoutData = {
        firstName: form["firstName"].value,
        lastName: form["lastName"].value,
        companyName: form["companyName"].value,
        shippingAccountNumber: form["shippingAccountNumber"].value,
        email: form["email"].value,
        address: form["address"].value,
        city: form["city"].value,
        state: form["state"].value,
        country: form["country"].value,
        zip: form["zip"].value,
        phone: form["phone"].value,
      }

      this.stage = 'payment'
      this.initializePayment()
    }
  }

  public async initializePayment() {
    const appId = environment.squareAppID;
    const locationId = environment.squareLocationID;
    const costDetails = {
      cartTotal: this.cart.total,
      salesTax: this.salesTaxPercent,
      serviceFee: this.orderTotal * (this.serviceFee / 100)
    }

    async function initializeCard(payments) {
      const card = await payments.card();
      await card.attach('#card-container');
      return card;
    }

    async function createPayment(token, shippingInfo, orderInfo) {
      const body = JSON.stringify({
        locationId,
        sourceId: token,
        amountMoney: {
          amount: orderInfo.totalAmount,
          currency: 'USD'
        },
        cart: cart,
        firstname: shippingInfo.firstName,
        lastname: shippingInfo.lastName,
        companyName: shippingInfo.companyName,
        shippingAccountNumber: shippingInfo.shippingAccountNumber,
        orderId: orderInfo.orderId,
        buyerEmailAddress: shippingInfo.email,
        phone: shippingInfo.phone,
        shippingAddress: {
          addressLine1: shippingInfo.address,
          locality: shippingInfo.city,
          administrativeDistrictLevel1: shippingInfo.state,
          country: shippingInfo.country,
          postalCode: shippingInfo.zip
        }
      });

      const paymentResponse = await fetch('/api/products/createPayment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      if (paymentResponse.ok) {
        return paymentResponse.json();
      }
      const errorBody = await paymentResponse.text();
      throw new Error(errorBody);
    }

    async function tokenize(paymentMethod) {
      let tokenResult = await paymentMethod.tokenize();
      if (tokenResult.status === 'OK') {
        return tokenResult.token;
      } else {
        let errorMessage = `Tokenization failed-status: ${tokenResult.status}`;
        if (tokenResult.errors) {
          errorMessage += ` and errors: ${JSON.stringify(
            tokenResult.errors
          )}`;
        }
        throw new Error(errorMessage);
      }
    }

    if (!window['Square']) {
      throw new Error('Square.js failed to load properly');
    }

    const payments = window['Square'].payments(appId, locationId);
    let card;
    try {
      card = await initializeCard(payments);
    } catch (e) {
      console.error('Initializing Card failed', e);
      return;
    }

    async function handlePaymentMethodSubmission(event, paymentMethod, shippingInfo, orderInfo) {
      event.preventDefault();

      try {
        cardButton['disabled'] = true;
        const token = await tokenize(paymentMethod);
        const paymentResults = await createPayment(token, shippingInfo, orderInfo);
        if (paymentResults.success) {
          localStorage.clear()
          window.location.replace("http://localhost:4200");
        }
      } catch (e) {
        cardButton['disabled'] = false;
        console.error(e.message);
      }
    }

    const cardButton = document.getElementById('card-button');
    const checkoutForm = this.checkoutData

    cardButton.addEventListener('click', async function (event) {
      //let validForm = await isValid(checkoutForm)
      //if(validForm) {
        const orderResponse = await handleOrderCreation();

        if(orderResponse){
          await handlePaymentMethodSubmission(event, card, checkoutForm, orderResponse);
        } else {
        }
    });

    const cart = JSON.stringify(this.cart)
    async function handleOrderCreation() {
      const body = JSON.stringify({
        cart,
        costDetails
      })

      try {
        const orderResponse = await fetch('/api/products/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body
        });

        return orderResponse.json()
      } catch (e) {

      }
    }
  }
}
