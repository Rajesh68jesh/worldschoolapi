const { Client } = require('pg')

let loads = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'jesh',
    database:'school'
  };
  async function executeQuerry(sql){ 
    var res;
    const client = new Client(loads);
    client.connect();
    await client.query(sql).then(result => res =  result.rows)
      .catch(e => console.error(e.stack))
      .then(() => client.end());
    return res;
  };

async function exe(){
    // var sql = "CREATE TAB LE ORDER(ID INT,TITLE TEXT);";
    // console.log("connected");
    // client.query(sql, (err, res) => {
    //     if (err) {
    //       console.log(err.stack)
    //     } else {
    //       console.log(res.rows[0])
    //     }
    //   })
//    await executeQuerry("INSERT INTO sample(ID) VALUES(4);");
    await executeQuerry("CREATE TABLE IF NOT EXISTS ORDERS(ID INTEGER,TITLE TEXT,MESSAGE TEXT,QUANTITY TEXT,CITY TEXT,PRIMARY KEY(ID));")
   // var sql = "SELECT * FROM ORDERS;";
   // var result = await executeQuerry(sql);
    //console.log(result);
}


exe();