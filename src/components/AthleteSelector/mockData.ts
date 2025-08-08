import { Athlete } from './types';

export const mockAthletes: Athlete[] = [
  // U23 Athletes (not in current squads filter)
  {
    id: 'adams-john',
    name: 'Adams, John',
    position: 'Striker',
    ageGroup: 'U23',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'byrne-john',
    name: 'Byrne, John',
    position: 'Striker',
    ageGroup: 'U23',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'anderson-john',
    name: 'Anderson, John',
    position: 'Centre forward',
    ageGroup: 'U23',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'garcia-luis',
    name: 'Garcia, Luis',
    position: 'Midfielder',
    ageGroup: 'U23',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'rodriguez-carlos',
    name: 'Rodriguez, Carlos',
    position: 'Defender',
    ageGroup: 'U23',
    status: 'injured',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'martinez-diego',
    name: 'Martinez, Diego',
    position: 'Goalkeeper',
    ageGroup: 'U23',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'clarke-michael',
    name: 'Clarke, Michael',
    position: 'Midfielder',
    ageGroup: 'U23',
    status: 'injured',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'davis-robert',
    name: 'Davis, Robert',
    position: 'Defender',
    ageGroup: 'U23',
    status: 'unavailable',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  },

  // U21 Athletes
  {
    id: 'evans-james',
    name: 'Evans, James',
    position: 'Goalkeeper',
    ageGroup: 'U21',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'foster-william',
    name: 'Foster, William',
    position: 'Midfielder',
    ageGroup: 'U21',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'green-thomas',
    name: 'Green, Thomas',
    position: 'Winger',
    ageGroup: 'U21',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'harris-daniel',
    name: 'Harris, Daniel',
    position: 'Defender',
    ageGroup: 'U21',
    status: 'injured',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face',
  },

  // U19 Athletes
  {
    id: 'jackson-christopher',
    name: 'Jackson, Christopher',
    position: 'Striker',
    ageGroup: 'U19',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'king-matthew',
    name: 'King, Matthew',
    position: 'Midfielder',
    ageGroup: 'U19',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'lewis-anthony',
    name: 'Lewis, Anthony',
    position: 'Defender',
    ageGroup: 'U19',
    status: 'unavailable',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
  },

  // U18 Athletes
  {
    id: 'martin-joshua',
    name: 'Martin, Joshua',
    position: 'Winger',
    ageGroup: 'U18',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1558203728-00f45181dd84?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'nelson-andrew',
    name: 'Nelson, Andrew',
    position: 'Goalkeeper',
    ageGroup: 'U18',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'owen-ryan',
    name: 'Owen, Ryan',
    position: 'Midfielder',
    ageGroup: 'U18',
    status: 'injured',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },

  // U17 Athletes
  {
    id: 'parker-benjamin',
    name: 'Parker, Benjamin',
    position: 'Striker',
    ageGroup: 'U17',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'quinn-jacob',
    name: 'Quinn, Jacob',
    position: 'Defender',
    ageGroup: 'U17',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face',
  },

  // U16 Athletes
  {
    id: 'roberts-ethan',
    name: 'Roberts, Ethan',
    position: 'Midfielder',
    ageGroup: 'U16',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'smith-noah',
    name: 'Smith, Noah',
    position: 'Winger',
    ageGroup: 'U16',
    status: 'unavailable',
    avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
  },

  // U15 Athletes
  {
    id: 'taylor-liam',
    name: 'Taylor, Liam',
    position: 'Goalkeeper',
    ageGroup: 'U15',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'walker-mason',
    name: 'Walker, Mason',
    position: 'Defender',
    ageGroup: 'U15',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop&crop=face',
  },

  // U14 Athletes
  {
    id: 'young-oliver',
    name: 'Young, Oliver',
    position: 'Striker',
    ageGroup: 'U14',
    status: 'available',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face',
  },
  {
    id: 'white-lucas',
    name: 'White, Lucas',
    position: 'Midfielder',
    ageGroup: 'U14',
    status: 'injured',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face',
  },
];
