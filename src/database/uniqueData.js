// Land Types ['High' 'Medium_High' 'Medium_Low' 'Low' 'Very_Low']
const land_types = [
	{
		name: "Medium_High",
		value: "0",
	},
	{
		name: "Medium_Low",
		value: "1",
	},
	{
		name: "Low",
		value: "2",
	},
	{
		name: "Very_Low",
		value: "3",
	},
];

// Topography ['Level' 'Undulating' 'Sloping']
const topography = [
	{
		name: "Level",
		value: "0",
	},
	{
		name: "Undulating",
		value: "1",
	},
	{
		name: "Sloping",
		value: "2",
	},
];

// Water Recession ['Very_Early' 'Early' 'Normal' 'Late' 'Very_Late' 'Not_Applicable'
//  'Missing']
const water_recession = [
	{
		name: "Very_Early",
		value: "0",
	},
	{
		name: "Early",
		value: "1",
	},
	{
		name: "Normal",
		value: "2",
	},
	{
		name: "Late",
		value: "3",
	},
	{
		name: "Very_Late",
		value: "4",
	},
	{
		name: "Not_Applicable",
		value: "5",
	},
	{
		name: "Missing",
		value: "6",
	},
];

// Drainage Condition ['Well_Drained' 'Moderately_Well_Drained' 'Imperfectly_Drained' 'Poorly_Drained' 'Very_Poorly_Drained' 'Missing']
const drainage_condition = [
	{
		name: "Well_Drained",
		value: "0",
	},
	{
		name: "Moderately_Well_Drained",
		value: "1",
	},
	{
		name: "Imperfectly_Drained",
		value: "2",
	},
	{
		name: "Poorly_Drained",
		value: "3",
	},
	{
		name: "Very_Poorly_Drained",
		value: "4",
	},
	{
		name: "Missing",
		value: "5",
	},
];

// Soil Texture ['Sandy'  'Sandy_Loam'  'Loam' 'Clay_Loam' 'Clay' 'Mud' ]
const soil_texture = [
	{
		name: "Sandy",
		value: "0",
	},
	{
		name: "Sandy_Loam",
		value: "1",
	},
	{
		name: "Loam",
		value: "2",
	},
	{
		name: "Clay_Loam",
		value: "3",
	},
	{
		name: "Clay",
		value: "4",
	},
	{
		name: "Mud",
		value: "5",
	},
];

//
// Soil Consistency Moist ['Loose' 'Friable' 'Firm' 'Wet_Sticky' 'Sticky'  'Non_Sticky']
const soil_consistency_moist = [
	{
		name: "Loose",
		value: "0",
	},
	{
		name: "Friable",
		value: "1",
	},
	{
		name: "Firm",
		value: "2",
	},
	{
		name: "Wet_Sticky",
		value: "3",
	},
	{
		name: "Sticky",
		value: "4",
	},
	{
		name: "Non_Sticky",
		value: "5",
	},
];

// Soil Moisture ['Low' 'Medium'  'High'  'Missing' 'Not_Applicable' ]
const soil_moisture = [
	{
		name: "Low",
		value: "0",
	},
	{
		name: "Medium",
		value: "1",
	},
	{
		name: "High",
		value: "2",
	},
	{
		name: "Missing",
		value: "3",
	},
	{
		name: "Not_Applicable",
		value: "4",
	},
];

// Soil Reaction [  'Very_Strongly_Acidic'  'Strongly_Acidic' 'Slightly_Acidic' 'Neutral' 'Slightly_Alkaline'   'Strongly_Alkaline' 'Very_Strongly_Alkaline ']
const soil_reaction = [
	{
		name: "Very_Strongly_Acidic",
		value: "0",
	},
	{
		name: "Strongly_Acidic",
		value: "1",
	},
	{
		name: "Slightly_Acidic",
		value: "2",
	},
	{
		name: "Neutral",
		value: "3",
	},
	{
		name: "Slightly_Alkaline",
		value: "4",
	},
	{
		name: "Strongly_Alkaline",
		value: "5",
	},
	{
		name: "Very_Strongly_Alkaline",
		value: "6",
	},
];

// Soil Salinity ['Non_Saline' 'Very_Slightly_Saline' 'Slightly_Saline'  'Moderately_Saline'  'Missing' 'Strongly_Saline' 'Very_Strongly_Saline' ]
const soil_salinity = [
	{
		name: "Non_Saline",
		value: "0",
	},
	{
		name: "Very_Slightly_Saline",
		value: "1",
	},
	{
		name: "Slightly_Saline",
		value: "2",
	},
	{
		name: "Moderately_Saline",
		value: "3",
	},
	{
		name: "Missing",
		value: "4",
	},
	{
		name: "Strongly_Saline",
		value: "5",
	},
	{
		name: "Very_Strongly_Saline",
		value: "6",
	},
];

// Organic Matter ['Very_Low' 'Low' 'Medium' 'High' 'Very_High' 'Missing']
const organic_matter = [
	{
		name: "Very_Low",
		value: "0",
	},
	{
		name: "Low",
		value: "1",
	},
	{
		name: "Medium",
		value: "2",
	},
	{
		name: "High",
		value: "3",
	},
	{
		name: "Very_High",
		value: "4",
	},
	{
		name: "Missing",
		value: "5",
	},
];

// Farming Method ['Up' 'Wet' 'Up_Wet'  'Missing'  ]
const farming_method = [
	{
		name: "Up",
		value: "0",
	},
	{
		name: "Wet",
		value: "1",
	},
	{
		name: "Up_Wet",
		value: "2",
	},
	{
		name: "Missing",
		value: "3",
	},
];

// Soil Color ['Gray' 'Dark_Gray' 'Black'  'Pale_Brown' 'Brown' 'Dark_Brown'  'Red'    'Green_Gray' 'Mixed' 'Mixed_Color'  ]
const soil_color = [
	{
		name: "Gray",
		value: "0",
	},
	{
		name: "Dark_Gray",
		value: "1",
	},
	{
		name: "Black",
		value: "2",
	},
	{
		name: "Pale_Brown",
		value: "3",
	},
	{
		name: "Brown",
		value: "4",
	},
	{
		name: "Dark_Brown",
		value: "5",
	},
	{
		name: "Red",
		value: "6",
	},
	{
		name: "Green_Gray",
		value: "7",
	},
	{
		name: "Mixed",
		value: "8",
	},
	{
		name: "Mixed_Color",
		value: "9",
	},
];

export {
	land_types,
	topography,
	water_recession,
	drainage_condition,
	soil_texture,
	soil_consistency_moist,
	soil_moisture,
	soil_reaction,
	soil_salinity,
	organic_matter,
	farming_method,
	soil_color,
};
