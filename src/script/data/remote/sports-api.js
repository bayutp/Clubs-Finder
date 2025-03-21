const BASE_URL = 'https://sports-api.dicoding.dev'

class SportsApi {
    static async searchClub(query) {
        const response = await fetch(`${BASE_URL}/teams/search?t=${query}`)

        if (!(response.status >= 200 && response.status < 300)) {
            throw new Error('Something went wrong')
        }

        const responseJson = await response.json()
        const { teams: clubs } = responseJson
        
        if (clubs.length <= 0) {
            throw new Error(`\`${query}\` is not found`);
        }
        return clubs
        // return fetch(`${BASE_URL}/teams/search?t=${query}`)
        //     .then(response => {
        //         if (response.status >= 200 && response.status < 300) {
        //             return response.json()
        //         } else {
        //             return Promise.reject(new Error('Something went wrong!'))
        //         }
        //     })
        //     .then(responseJson => {
        //         const {teams:clubs} = responseJson

        //         if (clubs.length > 0) {
        //             return Promise.resolve(clubs)
        //         } else {
        //             return Promise.reject(`\`${query}\` is not found`)
        //         }
        //     })
    }
}

export default SportsApi