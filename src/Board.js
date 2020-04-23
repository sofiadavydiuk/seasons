import React from "react";


class Board extends React.Component {
	renderSquare(i) {
		return <Square value={i} />;
	}
}
