import { TileData } from "../types/types";

const ConditionTile = ({ title, value, units, icon }: TileData) => {
	return (
		<div className="bg-gray-800 p-4 rounded-lg">
			<div className="text-gray-400 flex items-center">
				{icon}
				<span className="ml-2">{title}</span>
			</div>
			<div className="text-2xl text-white font-bold mt-2">
				{value} {units}
			</div>
		</div>
	);
};
export default ConditionTile;
