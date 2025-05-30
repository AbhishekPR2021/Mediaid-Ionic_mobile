
export const CREATE_TABLES: string[]=[

    'CREATE TABLE IF NOT EXISTS USER(USER_ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, EMAIL TEXT UNIQUE NOT NULL, AGE INTEGER NOT NULL, BLOOD_GROUP TEXT NOT NULL, PHONE_NUMBER TEXT NOT NULL, PASSWORD TEXT NOT NULL, IS_AUTH INTEGER);',
    'CREATE TABLE IF NOT EXISTS MEDICINES(MEDICINE_ID INTEGER PRIMARY KEY AUTOINCREMENT, MEDICINE_NAME TEXT NOT NULL, TIME_TO_TAKE TEXT,COMPLETION TEXT);',
    'CREATE TABLE IF NOT EXISTS EMERGENCY(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, PHONE_NUMBER TEXT NOT NULL, ALTERNATE_PHONE_NUMBER TEXT NOT NULL, AGE INTEGER NOT NULL, ADDRESS TEXT NOT NULL, HOSPITAL_CONTACT TEXT NOT NULL, LOCATION TEXT NOT NULL, REPORT TEXT);',
    'CREATE TABLE IF NOT EXISTS DOCTORS(DOCT_ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, ADDRESS TEXT NOT NULL, PHONE_NUMBER TEXT NOT NULL, SPECIALIZED TEXT NOT NULL);',
    'CREATE TABLE IF NOT EXISTS DIETS(DIET_ID INTEGER PRIMARY KEY AUTOINCREMENT, COURSE_NAME TEXT NOT NULL, DURATION TEXT NOT NULL, DESCRIPTION TEXT NOT NULL, VIDEOS TEXT);',
    'CREATE TABLE IF NOT EXISTS BOOKING(BOOKING_ID INTEGER PRIMARY KEY AUTOINCREMENT, DOCT_ID INTEGER NOT NULL, DATE TEXT NOT NULL, TIME TEXT NOT NULL, ILLNESS TEXT NOT NULL, STATUS INTEGER);'
];

export const CLEAR_TABLES: string[]=[
    'DELETE FROM USER;',
    'DELETE FROM MEDICINES;',
    'DELETE FROM EMERGENCY;',
    'DELETE FROM DOCTORS;',
    'DELETE FROM DIETS;',
    'DELETE FROM BOOKING;'
]