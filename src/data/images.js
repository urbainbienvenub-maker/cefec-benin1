// Images temporaires libres de droits (Unsplash) — thèmes : climatisation,
// énergie solaire, maintenance industrielle, techniciens HVAC, bâtiments modernes.
//
// ⚠️ À REMPLACER : déposez vos propres photos dans /src/assets puis importez-les
// ici pour remplacer ces URLs distantes par vos visuels définitifs.
// Un dégradé de secours (voir ImageWithFallback.jsx) s'affiche automatiquement
// si une image distante ne charge pas.

const u = (id, params = 'auto=format&fit=crop&w=1400&q=80') => `https://images.unsplash.com/${id}?${params}`

export const images = {
  heroTechnician: u('photo-1621905251189-08b45d6a269e'),
  heroBuilding: u('photo-1486406146926-c627a92ad1ab'),
  solarPanels: u('photo-1509391366360-2e959784a276'),
  solarRoof: u('photo-1508514177221-188b1cf16e9d'),
  acTechnician: u('photo-1631545806609-746165b21c48'),
  acUnit: u('photo-1558449028-b53a39d100fc'),
  electricalPanel: u('photo-1621905252472-e8de6d0a2f0e'),
  serverRoom: u('photo-1558494949-ef010cbdcc31'),
  maintenanceTech: u('photo-1581092160607-ee22621dd758'),
  modernBuildingNight: u('photo-1449824913935-59a10b8d2000'),
  teamWork: u('photo-1521791136064-7986c2920216'),
  coldStorage: u('photo-1580913428023-02c429014349'),
  aboutTeam: u('photo-1581092919535-1a9a9a3c99e8'),
  gallery1: u('photo-1621905252507-b35492cc74b4'),
  gallery2: u('photo-1509391366360-2e959784a276'),
  gallery3: u('photo-1581093458791-9d42cc0e0c4e'),
  gallery4: u('photo-1518770660439-4636190af475'),
  gallery5: u('photo-1580894732444-8ecded7900cd'),
  gallery6: u('photo-1508514177221-188b1cf16e9d'),
  gallery7: u('photo-1581092160562-40aa08e78837'),
  gallery8: u('photo-1584438784894-089d6a62b8fa'),
  gallery9: u('photo-1461749280684-dccba630e2f6')
}
