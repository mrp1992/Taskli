import * as React from "react"
import Svg, { SvgProps, G, Ellipse, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function CircularAdd(props: SvgProps) {
	return (
		<Svg
			width={72}
			height={66}
			viewBox="0 0 72 66"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<G filter="url(#prefix__filter0_d)">
				<Ellipse cx={36} cy={29} rx={32} ry={29} fill="#94E0C0" />
				<Path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M38 18.125h-4v9.063H24v3.625h10v9.062h4v-9.063h10v-3.625H38v-9.062z"
					fill="#00C6AB"
				/>
			</G>
			<Defs></Defs>
		</Svg>
	)
}

export default CircularAdd
