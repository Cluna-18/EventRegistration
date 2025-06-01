import mysql, {
  ConnectionOptions,
  RowDataPacket,
} from "mysql2/promise";

const access: ConnectionOptions = {
  host: "localhost",
  port: 3306,
  database: process.env.MYSQL_DATABASE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
};

const conn = await mysql.createConnection(access);

export interface Event extends RowDataPacket {
  id: number;
  title : string;
  time: string;
  place: string;
  description: string;
}

export async function fetchEvents(): Promise<Event[]> { 
    const query = "SELECT * FROM `events`;";
    
    const [events] = await conn.query<Event[]>(query);
    
    return events;
    }

export async function fetchEvent(id: number): Promise<Event> {
  const query = "SELECT * from events WHERE id=?";

  const values = [id];
  const [events] = await conn.query<Event[]>(query, values);

  if (events.length == 0) throw Error("Invalid event id.");

  return events[0];
}

export interface Registrations extends RowDataPacket {
  id: number;   
  event: number;
  name: string;
  email:string;
}

export async function fetchRegistrations(eventid:number): Promise<Registrations[]> {
  const query = "SELECT * from registrations WHERE event=?";

  const values = [eventid];
  const [registrations] = await conn.query<Registrations[]>(query, values);

  return registrations;
}

export async function registerForEvent(
        eventid: number,
        name: string,
        email:String
    ){
        const sql = "INSERT INTO registrations (event, name, email) VALUES (?, ?, ?)";
        const values = [eventid, name, email];

        await conn.execute(sql, values);
    }
