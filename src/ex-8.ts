// DIN UPPGIFT: Använda enums för att skapa olika användarroller som ska vara "Admin", "Member" eller "Guest".
// Du ska även implementera funktionen assignBadgeColor som ska returnera en färg baserat på rollen.
// Admin ska returnera "Red", Member ska returnera "Blue" och Guest ska returnera "Green". / 3 poäng

// 1. Definerier enums för UserRoles Adming, Member och Guest
enum UserRole {
  'Admin',
  'Member',
  'Guest',
}

interface User {
  name: string;
  role: UserRole;
}

// 2. Implementera assignBadgeColor-funktionen som ska returnera en färg baserat på användarens roll.
function assignBadgeColor(user: User): string {
  switch (user.role) {
    case UserRole.Admin:
      return 'Red';
    case UserRole.Member:
      return 'Blue';
    case UserRole.Guest:
      return 'Green';
    default:
      const checkForMissingRoles: never = user.role;
      return checkForMissingRoles;
  }
}

// Testa funktionen
