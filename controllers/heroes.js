const models = require('../models')
const { Op } = require('sequelize')

const getAllHeroes = async (request, response) => {
  const heroes = await models.heroes.findAll()

  return response.send(heroes)
}

const getHero = async (request, response) => {
  try {
    const { urlValue } = request.params

    const foundHero = await models.heroes.findOne({
      where: {
        [Op.or]:
        {
          slug: urlValue,
          id: urlValue
        }
      }
    })

    return foundHero
      ? response.send(foundHero)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve hero, please try again')
  }
}

const saveNewHero = async (request, response) => {
  const { name, realname, firstappearance, slug } = request.body

  if (!name || !realname || !firstappearance || !slug) {
    return request.status(400).send('The following fields are required: name, realname, firstappearance, slug')
  }

  const newHero = await models.heroes.create({ name, realname, firstappearance, slug })

  return response.status(201).send(newHero)
}

module.exports = { getAllHeroes, getHero, saveNewHero }
