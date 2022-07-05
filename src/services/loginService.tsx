import { useQuery } from 'react-query'
import axios from 'axios'

export function loginService() {
    const options = {
        method: 'GET',
        url: 'https://omni-tracking-web-staging.herokuapp.com/api/auth/session',
        headers: {
            Accept: '/',
            'Accept-Language': 'pt-PT,pt;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6',
            Connection: 'keep-alive',
            Cookie: '__Host-next-auth.csrf-token=02468976634724029672b24fa1222b9fa5e24d29bf9b731a00d9e511251a2f95%7C19a7a3cf3579b9b65285f90163209372ef872d6d53ab7092122250c3b18fb638; __Secure-next-auth.callback-url=https%3A%2F%2Fomni-tracking-web-staging.herokuapp.com%2Fauth%2FsignIn; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEyNjQ3LCJleHAiOjE2NTkyMDQ2NDd9.ij9ZdiMdMZd7FSpjIlbpXaZqnZfSlHv8ABE8ohtBeEwJzy6K3teF5_rG9jxAH1f-5mwEilgNysowpjXSU-tYtw; __Secure-next-auth.callback-url=https%253A%252F%252Fomni-tracking-web-staging.herokuapp.com%252Fauth%252FsignIn; __Host-next-auth.csrf-token=812b962f248d10e2b368057aacd0369388197ce2ca191963f0c96fad324b9b22%257Cb7b92c2cfebd6e6a376a23a13739f2e0cc075cf56512aa85469b8a56ce897a4f; __Secure-next-auth.session-token=eyJhbGciOiJIUzUxMiJ9.eyJuYW1lIjoiRGF2aSBWaWxlbGEgZGUgQXJhdWpvIiwiZW1haWwiOiJ0ZXN0ZUBleGFtcGxlLmNvbSIsInN1YiI6ImM5NjgxMWYwLTEzY2QtNGQ0Mi1hMzU0LTA3ZDY2MmE1YTY1OCIsImlkIjoiYzk2ODExZjAtMTNjZC00ZDQyLWEzNTQtMDdkNjYyYTVhNjU4IiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjU2NjEzMDczLCJleHAiOjE2NTkyMDUwNzN9.z09-xlzehkcmNhWJ44amg3z2C8HDAYKMn6MHrbA22FxOISX6wRvaYFKsUSIGdN5JGr3nntH0lbGc8X54GtqIIw',
            'If-None-Match': '"2-vyGp6PvFo4RvsFtPoIWeCReyIC8"',
            Referer: 'https://omni-tracking-web-staging.herokuapp.com/en/admin/dashboard',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
            'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
        },
        withCredentials: true,
    }

    const { data, isFetching, error } = useQuery('', () => {
        axios
            .request(options)
            .then(function (response) {
                console.log(response.data)
            })
            .catch(function (error) {
                console.error(error)
            })
    })
}

// const response = await axios.get('http://157.230.55.217/api/escolas')
