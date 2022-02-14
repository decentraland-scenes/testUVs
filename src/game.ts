const paddedwallmaterial1 = new Material()
paddedwallmaterial1.roughness = 0.5
paddedwallmaterial1.albedoTexture = new Texture('images/scene-thumbnail.png', {
  wrap: 1,
})

const paddedwallmaterial2 = new Material()
paddedwallmaterial2.roughness = 0.5
paddedwallmaterial2.albedoTexture = new Texture('images/scene-thumbnail.png', {
  wrap: 1,
})

const entity1 = new Entity()
const box1 = new BoxShape()

entity1.addComponent(
  new Transform({
    position: new Vector3(11, 6, 2),
    scale: new Vector3(8, 6, 0.01 * 2),
  })
)
entity1.addComponentOrReplace(box1)
entity1.addComponentOrReplace(paddedwallmaterial1)
engine.addEntity(entity1)
box1.uvs = setUVs(new Vector3(120, 120, 1))

let label1 = new Entity()
label1.setParent(entity1)
label1.addComponent(
  new Transform({
    position: new Vector3(0, 0.7, 0),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
label1.addComponent(new TextShape('texture should repeat\n7 X 6'))
label1.getComponent(TextShape).fontSize = 1
label1.getComponent(TextShape).width = 4

entity1.addComponent(
  new OnPointerDown(
    () => {
      addNewEntity()
    },
    { hoverText: 'add entity', distance: 15 }
  )
)

// ################################################################################################

function addNewEntity() {
  const entity2 = new Entity()
  entity2.addComponent(
    new Transform({
      position: new Vector3(Math.random() * 12 + 3, 1, Math.random() * 12 + 3),
      scale: new Vector3(1, 1, 1),
    })
  )

  let newSize = Math.random() * 3000

  const box2 = new BoxShape()
  box2.uvs = setUVs(new Vector3(newSize, newSize, newSize))

  entity2.addComponentOrReplace(box2)
  entity2.addComponentOrReplace(paddedwallmaterial2)
  engine.addEntity(entity2)
}

// ################################################################################################

function setUVs(scale: Vector3) {
  const scalex = (1 / scale.x) * 100 * 2 * 4
  const scaley = (1 / scale.y) * 100 * 2 * 4
  return [
    0,
    0,
    0,
    1 * scaley,
    1 * scalex,
    1 * scaley,
    1 * scalex,
    0,

    0,
    0,
    0,
    1 * scaley,
    1 * scalex,
    1 * scaley,
    1 * scalex,
    0,

    0,
    0,
    0,
    1 * scaley,
    1 * scalex,
    1 * scaley,
    1 * scalex,
    0,

    0,
    0,
    0,
    1 * scaley,
    1 * scalex,
    1 * scaley,
    1 * scalex,
    0,

    0,
    0,
    0,
    1 * scaley,
    1 * scalex,
    1 * scaley,
    1 * scalex,
    0,

    0,
    0,
    0,
    1 * scaley,
    1 * scalex,
    1 * scaley,
    1 * scalex,
    0,
  ]
}
