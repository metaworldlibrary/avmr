Vue.component('nav-bar', {
  template: `
  <div class="border flex p-5">
    <img class="h-10" src="logo.jpg">
    <div class="navbar w-screen mx-5 flex items-end justify-end">
        <button class="mx-2 p-2 border-b hover:line fast" onclick="window.location.href = 'index.php';">HOME</button>
        <button class="mx-2 p-2 border-b hover:line fast" onclick="window.location.href = 'rooms.php';">ROOM AND RATES</button>
        <button class="mx-2 p-2 border-b hover:line fast" onclick="window.location.href = 'amenities.php';">ACTIVITIES</button>
        <button class="mx-2 p-2 border-b hover:line fast" onclick="window.location.href = 'location.php';">LOCATION</button>
        <button class="mx-2 p-2 border-b hover:line fast" >CONTACT US</button>
        <button class="mx-2 p-2 btn border border-black rounded-full hover:bg-green-500 hover:text-white fast" onclick="window.location.href = 'reservation.php';">BOOK NOW</button>
    </div>
  </div>`
})
Vue.component('web-footer', {
  template: `
  <div class="bg-black text-white">        
    <div class="flex px-40">
        <div class="w-3/6 p-5">
            <h1>Amazing View Mountain and Farm Resort</h1>
            <label>KM 72 Sitio Little Baguio</label>
            <label>Brgy. Paagahan, Mabitac</label>
            <label>Laguna, Philippines</label>
        </div>
        <div class="w-3/6 p-5">
            <div><img class="mx-3" src=landline.jpg>+63(049) 0591 0711 | 5910698</div>
            <div><img class="mx-3" src=cellphone.jpg>+639464073550 | +639174545980</div>
            <div><img class="mx-3" src=email.jpg>reservation@amazingviewresort.com</div>
        </div>
    </div>
    <div class="text-center text-xs text-gray-500">
        <p>&copy;2020 Amazing View Mountain and Farm Resort. All Rights Reserved</p>
    </div>
  </div>`
})
Vue.component('registration', {
  template:`
  <div class="flex justify-center">
      <div class="w-full max-w-xl">
          <form class= "bg-white shadow-md rounded px-3 pt-10 pb-8 my-4" id="reservation-form" action="">
              <span class="border border-black" id="tab1">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  STEP 1:
                </label>
                date in:<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="InDate" value="">
                date out:<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" name="OutDate" value="">
                number of guests: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" name="persons" value="">
              </span>
              <span id="tab2">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  STEP 2:
                </label>
                room: <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text">
              </span>
              <span id="tab3">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  STEP 3:
                </label>
                First name: <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                last name: <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                email : <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                mobile no: <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                landline no: <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              </span>
              <span id="tab4">
                <label class="block text-gray-700 text-sm font-bold mb-2">
                  STEP 4:
                </label>
                this part shows a detailed info of all the inputted data for checking if you inputted things corrrectly
                <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="okay, we done!" >
              </span>
          </form>
      </div>
    </div>`
})
var app = new Vue({
  el: '#main'
})