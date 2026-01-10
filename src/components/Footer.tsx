import { Box } from "@mui/material"
import { SOCIAL_URLS } from "@/static/urls"

const Footer = () => {
    return(
        <Box sx={{padding:"2rem",background:"black",color:'white',opacity:0.7}}>
            <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
                <div> 
                    <span>@ 2025 Muskan Pandey</span>
                </div>
                <div>
                    <a 
                        className="iconHover" 
                        href={SOCIAL_URLS.GITHUB}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{marginRight:"10px"}}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8m-9.64 6.81v-1.49c-1.9.426-2.31-.852-2.31-.852c-.306-.828-.758-1.04-.758-1.04c-.622-.438.045-.438.045-.438c.69.047 1.05.734 1.05.734c.611 1.09 1.6.781 1.99.592c.057-.462.238-.781.43-.959c-1.52-.166-3.11-.781-3.11-3.53c0-.781.271-1.42.702-1.92c-.068-.177-.306-.911.068-1.89c0 0 .577-.189 1.88.734a6.4 6.4 0 0 1 1.71-.237c.577 0 1.17.083 1.71.237c1.3-.923 1.88-.734 1.88-.734c.374.982.136 1.72.068 1.89c.442.497.702 1.14.702 1.92c0 2.75-1.6 3.35-3.12 3.53c.25.225.501.651.501 1.33v2.09a7 7 0 0 0 5.21-6.77c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 3.3 2.29 6.07 5.36 6.81z" clipRule="evenodd"></path></svg>
                    </a>
                    <a 
                        className="iconHover" 
                        href={SOCIAL_URLS.LINKEDIN}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} viewBox="0 0 24 24"><path fill="currentColor" d="M19.707 3H4.347a1.3 1.3 0 0 0-1.306 1.306v15.388c0 .696.58 1.306 1.306 1.306h15.3a1.3 1.3 0 0 0 1.307-1.306V4.277C21.013 3.581 20.432 3 19.707 3M8.354 18.3H5.713V9.735h2.642zM7.019 8.545a1.53 1.53 0 0 1-1.538-1.539c0-.841.696-1.538 1.538-1.538s1.54.697 1.54 1.538s-.64 1.54-1.54 1.54M18.371 18.3h-2.642v-4.152c0-.987-.029-2.293-1.393-2.293c-1.394 0-1.597 1.103-1.597 2.206V18.3h-2.642V9.735h2.584v1.19h.029c.377-.696 1.22-1.393 2.526-1.393c2.7 0 3.193 1.742 3.193 4.123V18.3z"></path></svg>
                    </a>
                </div>
            </Box>
        </Box>
    )
}

export default Footer