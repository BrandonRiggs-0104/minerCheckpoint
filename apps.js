
// SECTION global variables
let resources = 1000
let clickUpgrades = [
  {
    name: 'shovel',
    price: 100,
    quantity: 0,
    multiplier: 5
  },
  {
    name: 'drill',
    price: 200,
    quantity: 0,
    multiplier: 10
  }
];
let automaticUpgrades = [
  {
    name: 'geiger',
    price: 500,
    quantity: 0,
    multiplier: 25
  }
];

// SECTION functions
function mineResources() {
  resources++
  let shovel = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'shovel')
  let shovelUp = shovel.multiplier * shovel.quantity
  resources += shovelUp
  let drills = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'drill')
  let drillUp = drills.multiplier * drills.quantity
  resources += drillUp


  drawResources()
}

function update() {
  drawResources()
  drawShovel()
  drawDrill()
  drawGeiger()
  drawRefinery()
}

function buyShovel() {
  let shovel = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'shovel')
  if (resources >= shovel.price) {
    shovel.quantity++
    shovel.price += 50
    resources -= shovel.price
    console.log(shovel, 'shovel');
    console.log(resources, 'resources');
  }
  else {
    window.alert('Not enough Uranium!')
  }
  update()
}

function buyDrill() {
  let drills = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'drill')
  if (resources >= drills.price) {
    drills.quantity++
    drills.price += 100
    resources -= drills.price
    console.log('drills', drills);
    console.log('resources', resources);

  }
  else {
    window.alert('Not enough Uranium!')
  }
  update()
}
function buyGeiger() {
  let geiger = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'geiger')
  if (resources >= geiger.price) {
    geiger.quantity++
    geiger.price += 250
    resources -= geiger.price
    console.log('geiger', geiger);
    console.log('resources', resources);
  }
  else {
    window.alert('Not enough Uranium!')
  }
}
function buyRefinery() {
  if (resources >= 1000) {
    // @ts-ignore
    refinery++

    console.log('refinery');
    drawRefinery()
  }
  else {
    window.alert('Not enough Uranium!')
  }
}



// SECTION draw functions
function drawResources() {
  let uranium = document.getElementById('resourcesQty')

  // @ts-ignore
  uranium.innerText = resources
}
function drawShovel() {
  let shovelElement = document.getElementById('shovel')
  let shovelPrice = document.getElementById('shovel-price')
  let shovel = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'shovel')
  // @ts-ignore
  shovelElement.innerText = shovel.quantity
  // @ts-ignore
  shovelPrice.innerText = shovel.price
}
function drawDrill() {
  let drill = document.getElementById('drills')
  let drillPrice = document.getElementById('drill-price')
  let drills = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'drill')

  drill.innerText = drills.quantity.toString()
  // @ts-ignore
  drillPrice.innerText = drills.price
}
function drawGeiger() {
  let geiger = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'geiger')
  let geigers = document.getElementById('geiger')
  let geigerPrice = document.getElementById('geiger-price')
  // @ts-ignore
  geigers.innerText = geiger.quantity
  geigerPrice.innerText = geiger.price
}
function drawRefinery() {
  let refine = document.getElementById('refinery')
  // @ts-ignore
  refine.innerText = refinery
}
