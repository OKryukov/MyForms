import { FC } from 'react'
import styled from 'styled-components'

const PreLoaderStyled = styled.svg.attrs({ xmlns:"http://www.w3.org/2000/svg", viewBox:"0 0 100 100", preserveAspectRatio:"xMidYMid" })`
margin: auto;
background: none;
display: block;
shape-rendering: auto;
width: 100%;
height: 100%;
& rect{
  fill: ${({theme})=>theme.colors.fill};
}
`

export const PreLoader: FC = () => {
  return (
    <PreLoaderStyled>
      <g transform="rotate(0 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.8974358974358974s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(24 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.8333333333333333s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(48 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.7692307692307692s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(72 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.7051282051282051s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(96 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.641025641025641s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(120 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.5769230769230769s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(144 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.5128205128205128s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(168 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.4487179487179487s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(192 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.3846153846153846s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(216 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.3205128205128205s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(240 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.2564102564102564s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(264 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.1923076923076923s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(288 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.1282051282051282s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(312 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="-0.0641025641025641s" repeatCount="indefinite"></animate>
        </rect>
      </g><g transform="rotate(336 50 50)">
        <rect x="49" y="31.5" rx="1" ry="12.5" width="2" height="25">
          <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="0.9615384615384615s" begin="0s" repeatCount="indefinite"></animate>
        </rect>
      </g>
    </PreLoaderStyled>
  )
}