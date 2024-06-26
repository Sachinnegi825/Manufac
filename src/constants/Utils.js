export const getMaxAndMinCropsByYear = (data) => {
  const yearMap = {};

  data.map((entry) => {
    const year = entry.Year;
    const crop = entry["Crop Name"];
    const production = entry["Crop Production (UOM:t(Tonnes))"];

    if (!yearMap[year]) {
      yearMap[year] = {
        maxCrop: crop,
        maxProduction: production,
        minCrop: crop,
        minProduction: production,
      };
    } else {
      if (production > yearMap[year].maxProduction) {
        yearMap[year].maxCrop = crop;
        yearMap[year].maxProduction = production;
      }
      if (production < yearMap[year].minProduction) {
        yearMap[year].minCrop = crop;
        yearMap[year].minProduction = production;
      }
    }
  });

  return Object.entries(yearMap).map(([year, { maxCrop, minCrop }]) => ({
    year,
    maxCrop,
    minCrop,
  }));
};

// Function to calculate averages
export const calculateAverages = (data) => {
  const cropMap = {};

  data.forEach((entry) => {
    const crop = entry["Crop Name"];
    const yieldOfCrops =
      entry["Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))"] || 0;
    const areaUnderCultivation =
      entry["Area Under Cultivation (UOM:Ha(Hectares))"] || 0;

    if (!cropMap[crop]) {
      cropMap[crop] = {
        totalYield: 0,
        totalArea: 0,
        count: 0,
      };
    }

    cropMap[crop].totalYield += yieldOfCrops;
    cropMap[crop].totalArea += areaUnderCultivation;
    cropMap[crop].count += 1;
  });

  return Object.entries(cropMap).map(
    ([crop, { totalYield, totalArea, count }]) => [
      crop,
      (totalYield / count).toFixed(3),
      (totalArea / count).toFixed(3),
    ]
  );
};
