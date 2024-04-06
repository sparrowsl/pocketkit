/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ibnz40qbxoyjj80")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_eYSJkGE` ON `posts` (\n  `title`,\n  `author`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ibnz40qbxoyjj80")

  collection.indexes = []

  return dao.saveCollection(collection)
})
