import React, { useState } from "react";
import { SpeedDial } from '@rneui/themed';

const ActionDial = () => {

	const [open, setOpen] = useState(false);

	return(
		<SpeedDial
			isOpen={open}
			icon={{ name: 'edit', color: '#fff' }}
			openIcon={{ name: 'close', color: '#fff' }}
			onOpen={() => setOpen(!open)}
			onClose={() => setOpen(!open)}
		>
			<SpeedDial.Action
				icon={{ name: 'add', color: '#fff' }}
				title="Add"
				onPress={() => console.log('Add Something')}
			/>
		</SpeedDial>
	);
};

export default ActionDial;