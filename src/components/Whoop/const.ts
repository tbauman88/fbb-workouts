import { intervalToDuration } from "date-fns";
import { ZoneColor } from "./types";

export const CALORIES_PER_KJ = 4.184;

export const formatMillisecondsToTime = (milliseconds: number): string => {
  const duration = intervalToDuration({
    start: 0,
    end: milliseconds,
  });

  const { hours = 0, minutes = 0, seconds = 0 } = duration;

  if (hours > 0) {
    return `${hours}h ${minutes}m ${seconds}s`;
  } else if (minutes > 0) {
    return `${minutes}m ${seconds}s`;
  } else {
    return `${seconds}s`;
  }
};

export const ZONE_DATA: Record<number, {
  label: string;
  color: string;
}> = {
  0: {
    label: "Recovery",
    color: ZoneColor.Zone0,
  },
  1: {
    label: "Zone 1",
    color: ZoneColor.Zone1,
  },
  2: {
    label: "Zone 2",
    color: ZoneColor.Zone2,
  },
  3: {
    label: "Zone 3",
    color: ZoneColor.Zone3,
  },
  4: {
    label: "Zone 4",
    color: ZoneColor.Zone4,
  },
  5: {
    label: "Zone 5",
    color: ZoneColor.Zone5,
  },
};


export const SportMap: Record<number, string> = {
  [-1]: "Activity",
  0: "Running",
  1: "Cycling",
  16: "Baseball",
  17: "Basketball",
  18: "Rowing",
  19: "Fencing",
  20: "Field Hockey",
  21: "Football",
  22: "Golf",
  24: "Ice Hockey",
  25: "Lacrosse",
  27: "Rugby",
  28: "Sailing",
  29: "Skiing",
  30: "Soccer",
  31: "Softball",
  32: "Squash",
  33: "Swimming",
  34: "Tennis",
  35: "Track & Field",
  36: "Volleyball",
  37: "Water Polo",
  38: "Wrestling",
  39: "Boxing",
  42: "Dance",
  43: "Pilates",
  44: "Yoga",
  45: "Weightlifting",
  47: "Cross Country Skiing",
  48: "Functional Fitness",
  49: "Duathlon",
  51: "Gymnastics",
  52: "Hiking/Rucking",
  53: "Horseback Riding",
  55: "Kayaking",
  56: "Martial Arts",
  57: "Mountain Biking",
  59: "Powerlifting",
  60: "Rock Climbing",
  61: "Paddleboarding",
  62: "Triathlon",
  63: "Walking",
  64: "Surfing",
  65: "Elliptical",
  66: "Stairmaster",
  70: "Meditation",
  71: "Other",
  73: "Diving",
  74: "Operations - Tactical",
  75: "Operations - Medical",
  76: "Operations - Flying",
  77: "Operations - Water",
  82: "Ultimate",
  83: "Climber",
  84: "Jumping Rope",
  85: "Australian Football",
  86: "Skateboarding",
  87: "Coaching",
  88: "Ice Bath",
  89: "Commuting",
  90: "Gaming",
  91: "Snowboarding",
  92: "Motocross",
  93: "Caddying",
  94: "Obstacle Course Racing",
  95: "Motor Racing",
  96: "HIIT",
  97: "Spin",
  98: "Jiu Jitsu",
  99: "Manual Labor",
  100: "Cricket",
  101: "Pickleball",
  102: "Inline Skating",
  103: "Box Fitness",
  104: "Spikeball",
  105: "Wheelchair Pushing",
  106: "Paddle Tennis",
  107: "Barre",
  108: "Stage Performance",
  109: "High Stress Work",
  110: "Parkour",
  111: "Gaelic Football",
  112: "Hurling/Camogie",
  113: "Circus Arts",
  121: "Massage Therapy",
  123: "Strength Trainer",
  125: "Watching Sports",
  126: "Assault Bike",
  127: "Kickboxing",
  128: "Stretching",
  230: "Table Tennis",
  231: "Badminton",
  232: "Netball",
  233: "Sauna",
  234: "Disc Golf",
  235: "Yard Work",
  236: "Air Compression",
  237: "Percussive Massage",
  238: "Paintball",
  239: "Ice Skating",
  240: "Handball",
  248: "F45 Training",
  249: "Padel",
  250: "Barry's",
  251: "Dedicated Parenting",
  252: "Stroller Walking",
  253: "Stroller Jogging",
  254: "Toddlerwearing",
  255: "Babywearing",
  258: "Barre3",
  259: "Hot Yoga",
  261: "Stadium Steps",
  262: "Polo",
  263: "Musical Performance",
  264: "Kite Boarding",
  266: "Dog Walking",
  267: "Water Skiing",
  268: "Wakeboarding",
  269: "Cooking",
  270: "Cleaning",
  272: "Public Speaking",
};
