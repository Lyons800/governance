import React from 'react'

import {
  CategoryIconProps,
  CategoryIconVariant,
  getCategoryIconPrimaryColor,
  getCategoryIconSecondaryColor,
} from '../../../helpers/styles'

function SocialMediaContent({ variant = CategoryIconVariant.Normal, size }: CategoryIconProps) {
  if (variant === CategoryIconVariant.Circled) {
    return (
      <svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="10" fill="#FEF7D2" />
        <path
          d="M10.6544 9.79564C11.0148 9.5544 11.2521 9.14357 11.2521 8.67731C11.2521 7.9346 10.65 7.33252 9.90729 7.33252C9.16458 7.33252 8.5625 7.9346 8.5625 8.67731C8.5625 9.14357 8.79978 9.5544 9.16018 9.79564V15.8495C9.16018 16.2621 9.49466 16.5966 9.90729 16.5966C10.3199 16.5966 10.6544 16.2621 10.6544 15.8495V9.79564Z"
          fill="#FFB03F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.83452 6.97353C5.99281 6.58423 5.88108 6.11561 5.51713 5.90548C5.16719 5.70344 4.7152 5.81616 4.5481 6.18407C3.79519 7.84181 3.81916 9.78345 4.61266 11.4223C4.79101 11.7906 5.25334 11.8896 5.59907 11.6706C5.95028 11.4481 6.04556 10.9827 5.87943 10.6016C5.37919 9.45406 5.36321 8.13265 5.83452 6.97353Z"
          fill="#FFB03F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.56328 7.94685C7.65588 7.76478 7.59052 7.54563 7.37761 7.44736C7.17289 7.35287 6.90849 7.40559 6.81073 7.57765C6.37029 8.35291 6.38431 9.26096 6.8485 10.0274C6.95283 10.1996 7.22329 10.2459 7.42554 10.1435C7.63099 10.0394 7.68673 9.82182 7.58955 9.64358C7.29692 9.10691 7.28757 8.48893 7.56328 7.94685Z"
          fill="#FFB03F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.1654 10.6303C14.0071 11.0196 14.1188 11.4883 14.4828 11.6984C14.8327 11.9004 15.2847 11.7877 15.4518 11.4198C16.2047 9.76206 16.1808 7.82041 15.3873 6.18159C15.2089 5.81323 14.7466 5.71428 14.4008 5.9333C14.0496 6.15579 13.9544 6.62114 14.1205 7.00225C14.6207 8.14981 14.6367 9.47122 14.1654 10.6303Z"
          fill="#FFB03F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4366 9.65702C12.344 9.83908 12.4094 10.0582 12.6223 10.1565C12.827 10.251 13.0914 10.1983 13.1892 10.0262C13.6296 9.25095 13.6156 8.34291 13.1514 7.57649C13.0471 7.40422 12.7766 7.35795 12.5744 7.46037C12.3689 7.56442 12.3132 7.78205 12.4103 7.96028C12.703 8.49696 12.7123 9.11494 12.4366 9.65702Z"
          fill="#FFB03F"
        />
      </svg>
    )
  }

  const primaryColor = getCategoryIconPrimaryColor('yellow', variant)
  const secondaryColor = getCategoryIconSecondaryColor('yellow', variant)
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} fill="none" viewBox="-5 -5 52 52">
      <path fill={primaryColor} d="M22.271 14.242a4.5 4.5 0 10-5 0V34.5a2.5 2.5 0 105 0V14.242z"></path>
      <path
        fill={secondaryColor}
        fillRule="evenodd"
        d="M6.139 4.799c.53-1.303.156-2.87-1.062-3.574-1.171-.676-2.684-.299-3.243.932-2.52 5.547-2.44 12.045.216 17.529.597 1.232 2.144 1.563 3.3.83 1.176-.744 1.495-2.301.939-3.577a15.723 15.723 0 01-.15-12.14zM11.924 8.056c.31-.61.09-1.343-.622-1.672-.685-.316-1.57-.14-1.897.436-1.473 2.595-1.426 5.633.127 8.198.349.576 1.254.731 1.93.388.688-.348.875-1.076.55-1.672-.98-1.796-1.011-3.864-.088-5.678zM34.016 17.035c-.53 1.303-.156 2.871 1.062 3.575 1.171.676 2.684.298 3.243-.933 2.52-5.547 2.439-12.044-.216-17.528-.597-1.233-2.144-1.564-3.301-.831-1.175.745-1.494 2.302-.938 3.577a15.723 15.723 0 01.15 12.14zM28.231 13.779c-.31.609-.091 1.342.621 1.671.685.316 1.57.14 1.897-.436 1.474-2.594 1.427-5.633-.126-8.197-.35-.577-1.254-.732-1.931-.389-.688.348-.874 1.076-.549 1.673.98 1.796 1.01 3.864.088 5.678z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export default SocialMediaContent
