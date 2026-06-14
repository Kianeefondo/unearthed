import { pool } from '../config/database.js'

const transformRow = (row) => {
  return {
    id: row.id,
    name: row.name,
    pricePoint: row.pricepoint,
    audience: row.audience,
    image: row.image,
    description: row.description,
    submittedBy: row.submittedby,
    submittedOn: row.submittedon
  }
}

const getGifts = async (req, res) => {
  try {
      const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
      res.status(200).json(results.rows.map(transformRow))
  } catch (error) {
      res.status(409).json( { error: error.message } )
  }
}

const getGiftById = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts WHERE id=$1', [req.params.giftId])
        res.status(200).json(transformRow(results.rows[0]))
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default { getGifts, getGiftById }