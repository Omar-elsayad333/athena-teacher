type Props = {
    width?: number
    height?: number
}

const AbsentStudentIcon: React.FC<Props> = ({ width, height }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width ? width : 27}
            height={height ? height : 26}
            viewBox="0 0 27 26"
            fill="none"
        >
            <path
                d="M25.1434 4.19336H19.556C19.1856 4.19336 18.8303 4.34063 18.5683 4.60276C18.3063 4.86489 18.1592 5.22042 18.1592 5.59114C18.1592 5.96185 18.3063 6.31738 18.5683 6.57951C18.8303 6.84165 19.1856 6.98891 19.556 6.98891H25.1434C25.5139 6.98891 25.8691 6.84165 26.1311 6.57951C26.3931 6.31738 26.5402 5.96185 26.5402 5.59114C26.5402 5.22042 26.3931 4.86489 26.1311 4.60276C25.8691 4.34063 25.5139 4.19336 25.1434 4.19336Z"
                fill="#AE0000"
            />
            <path
                d="M9.7778 11.1822C10.8829 11.1822 11.9631 10.8543 12.882 10.24C13.8008 9.62559 14.517 8.75238 14.9399 7.73074C15.3627 6.7091 15.4734 5.58491 15.2578 4.50034C15.0422 3.41577 14.5101 2.41953 13.7287 1.6376C12.9473 0.85567 11.9517 0.323168 10.8678 0.107434C9.784 -0.1083 8.66056 0.00242252 7.6396 0.4256C6.61865 0.848778 5.74602 1.5654 5.13207 2.48486C4.51812 3.40431 4.19043 4.4853 4.19043 5.59111C4.19043 7.07397 4.7791 8.49609 5.82693 9.54463C6.87477 10.5932 8.29594 11.1822 9.7778 11.1822Z"
                fill="#AE0000"
            />
            <path
                d="M18.1589 25.1598C18.5294 25.1598 18.8847 25.0125 19.1467 24.7504C19.4086 24.4882 19.5558 24.1327 19.5558 23.762C19.5558 21.167 18.5256 18.6783 16.6919 16.8433C14.8582 15.0084 12.3712 13.9775 9.77789 13.9775C7.18464 13.9775 4.69759 15.0084 2.86388 16.8433C1.03017 18.6783 3.86426e-08 21.167 0 23.762C0 24.1327 0.147167 24.4882 0.409126 24.7504C0.671084 25.0125 1.02638 25.1598 1.39684 25.1598"
                fill="#AE0000"
            />
        </svg>
    )
}

export default AbsentStudentIcon
