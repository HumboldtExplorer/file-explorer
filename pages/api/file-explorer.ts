import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Code examples used from https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors

const cors = Cors({
    methods: ['GET'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
    req: NextApiRequest,
    res: NextApiResponse,
    fn: Function
) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result: any) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    await runMiddleware(req, res, cors)
    const response = await fetch(process.env.FILE_EXPLORER_API_URL || '',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-secret-api-key': process.env.FILE_EXPLORER_SECRET_API_KEY || '',
        }, 
    }).then((res) => res.json())

    return res.status(200).json(response)
}