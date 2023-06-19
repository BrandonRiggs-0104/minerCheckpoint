
// SECTION global variables
let resources = 95
let resourcesPerClick = [
  {
    quantity: 1
  }
]
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
  },
  {
    name: 'refinery',
    price: 1000,
    quantity: 0,
    multiplier: 50
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
  if (resources < 0) {
    resources = 0
  }

  drawResources()
}

function collectAutomatic() {
  let geiger = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'geiger')

  let geigerUp = geiger.multiplier * geiger.quantity
  resources += geigerUp

  let refinery = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'refinery')
  let refineryUp = refinery.multiplier * refinery.quantity
  resources += refineryUp

  let autoResources = refineryUp += geigerUp
  update()
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
    resources -= shovel.price
    shovel.quantity++
    shovel.price += 50
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
    resources -= drills.price
    drills.quantity++
    drills.price += 100
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
    resources -= geiger.price
    geiger.quantity++
    geiger.price += 250
    console.log('geiger', geiger);
    console.log('resources', resources);
    drawGeiger()
  }
  else {
    window.alert('Not enough Uranium!')
  }
  update()
}

function buyRefinery() {
  let refinery = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'refinery')
  if (resources >= refinery.price) {
    resources -= refinery.price
    refinery.quantity++
    refinery.price += 500
    console.log('refinery', refinery);
    console.log('resources', resources);
    drawRefinery()
  }
  else {
    window.alert('Not enough Uranium!')
  }
  update()
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
  let drills = clickUpgrades.find(clickUpgrade => clickUpgrade.name == 'drill')
  let drill = document.getElementById('drills')
  let drillPrice = document.getElementById('drill-price')

  drill.innerText = drills.quantity.toString()
  // @ts-ignore
  drillPrice.innerText = drills.price
}
function drawGeiger() {
  let geiger = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'geiger')
  let geigers = document.getElementById('geiger')
  let geigerPrice = document.getElementById('geiger-price')
  // @ts-ignore
  geigers.innerText = geiger.quantity
  // @ts-ignore
  geigerPrice.innerText = geiger.price

}
function drawRefinery() {
  let refinery = automaticUpgrades.find(automaticUpgrade => automaticUpgrade.name == 'refinery')
  let refineryQty = document.getElementById('refinery')
  let refineryPrice = document.getElementById('refinery-price')
  // @ts-ignore
  refineryQty.innerText = refinery.quantity

  // @ts-ignore
  refineryPrice.innerText = refinery.price
}
// SECTION resources per click
function perClick() {
  let perClick = resourcesPerClick.find(resourcesPer => resourcesPer.quantity == 1)
  let clicks = document.getElementById('clickcount')
  // @ts-ignore
  clicks.innerText = perClick.quantity
}

// FIXME start your intervals down here so that there is only one interval per upgrade
setInterval(collectAutomatic, 3000)