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
    scale: new Vector3(8, 5, 0.01 * 2),
  })
)
entity1.addComponentOrReplace(box1)
entity1.addComponentOrReplace(paddedwallmaterial1)
engine.addEntity(entity1)
box1.uvs = setUVs(new Vector3(120, 120, 200))

let label1 = new Entity()
label1.setParent(entity1)
label1.addComponent(
  new Transform({
    position: new Vector3(0, 0.7, 0),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
label1.addComponent(new TextShape('Should have texture repeated\n5 X 6.5'))
label1.getComponent(TextShape).fontSize = 1

// ################################################################################################

const entity2 = new Entity()
entity2.addComponent(
  new Transform({
    position: new Vector3(4, 1, 9),
    scale: new Vector3(1, 1, 1),
  })
)

const box2 = new BoxShape()
box2.uvs = setUVs(new Vector3(300, 300, 300))

entity2.addComponentOrReplace(box2)
entity2.addComponentOrReplace(paddedwallmaterial2)
engine.addEntity(entity2)

let label2 = new Entity()
label2.setParent(entity2)
label2.addComponent(
  new Transform({
    position: new Vector3(0, 0.9, 0),
    rotation: Quaternion.Euler(0, 180, 0),
  })
)
label2.addComponent(new TextShape('Should have texture repeated\n2 X 3.5'))
label2.getComponent(TextShape).fontSize = 3

// ################################################################################################

function setUVs(scale: Vector3) {
  const scalex = (1 / scale.x) * 100 * 2 * 4
  const scaley = (1 / scale.y) * 100 * 2 * 3
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
