export const MenuIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        preserveAspectRatio="xMidYMid meet" 
        focusable="false" 
        style={{fill: '#ffff', width: '30px', height: '30px'}}>
        <g className="style-scope yt-icon">
            <path d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z" 
        ></path>
        </g>
    </svg>
)

export const LoginIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        preserveAspectRatio="xMidYMid meet" 
        focusable="false" 
        style={{fill: '#ffff', width: '30px', height: '30px'}}>
        <g className="style-scope yt-icon">
            <path 
                d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,
                6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,
                3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,
                9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,
                3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,
                7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,
                3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,
                8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,
                12,21z" 
            ></path>
        </g>
    </svg>
)

export const NextIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        preserveAspectRatio="xMidYMid meet" 
        focusable="false" 
        style={{fill: '#ffff', width: '30px', height: '30px'}}>
        <g>
            <path 
                d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z">
            </path>
        </g>
    </svg>
)

export const CartIcon = () => (
    <svg 
	    viewBox="0 0 60 60" 
        style={{fill: '#ffff', width: '30px', height: '30px'}}>
        <g>
            <path d="M11.68,13l-0.833-5h-2.99C7.411,6.28,5.859,5,4,5C1.794,5,0,6.794,0,9s1.794,4,4,4c1.859,0,3.411-1.28,3.858-3h1.294l0.5,3
            H9.614l5.171,26.016c-2.465,0.188-4.518,2.086-4.76,4.474c-0.142,1.405,0.32,2.812,1.268,3.858C12.242,48.397,13.594,49,15,49h2
            c0,3.309,2.691,6,6,6s6-2.691,6-6h11c0,3.309,2.691,6,6,6s6-2.691,6-6h4c0.553,0,1-0.447,1-1s-0.447-1-1-1h-4.35
            c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4h-11.7c-0.826-2.327-3.043-4-5.65-4s-4.824,1.673-5.65,4H15
            c-0.842,0-1.652-0.362-2.224-0.993c-0.577-0.639-0.848-1.461-0.761-2.316c0.152-1.509,1.546-2.69,3.173-2.69h0.791
            c0.014,0,0.025,0,0.039,0h38.994C57.763,41,60,38.763,60,36.013V13H11.68z M4,11c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2
            S5.103,11,4,11z M46,45c2.206,0,4,1.794,4,4s-1.794,4-4,4s-4-1.794-4-4S43.794,45,46,45z M23,45c2.206,0,4,1.794,4,4s-1.794,4-4,4
            s-4-1.794-4-4S20.794,45,23,45z M58,36.013C58,37.66,56.66,39,55.013,39H16.821l-4.77-24H58V36.013z"/>
        </g>
    </svg>
)

export const SearchIcon = ( {fillst} ) => {
    var boolean = fillst
    return(
    <svg 
        className="search-icon"
        style={ boolean ? { fill:"#000"} : {fill:"#fff"}}
        xmlns="http://www.w3.org/2000/svg"  
        viewBox="0 0 30 30" 
        width="28px" 
        height="28px">
        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003
        7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 
        19.322266 20.736328 L 25.292969 26.707031 A 1.0001 
        1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 
        C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 
        18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 
        21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 
        21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/>
    </svg>
    )
}

export const PrevIcon = () => (
    <svg 
        viewBox="0 0 24 24" 
        preserveAspectRatio="xMidYMid meet" 
        focusable="false" 
        style={{fill: '#ffff', width: '30px', height: '30px'}}>
        <g>
            <path 
                d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z">
            </path>
        </g>
    </svg>
)

export const ColorIcon = ({color}) => (
    <svg
        width="12px"
        height="12px"
        fill={color === "white" ? "black" : "white"}
        viewBox="0 0 490 490"
        xmlns="http://www.w3.org/2000/svg" 
    >
        <polygon points="452.253,28.326 197.831,394.674 29.044,256.875 0,292.469 207.253,461.674 490,54.528 "/>
    </svg>
)