import axios from 'axios';
import React, { useEffect, useState } from 'react';

var token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJrWkFoZkJFZU1tRTVUN0tVaVhVeldOVmNobEl4UDdtOVpIaEZQYjYwSUZMbTZ5WHpZRCIsImp0aSI6IjBmNWE0ZDE0NDQyYzJjOGFiNmNhM2JiMzNhM2FiZGViZjAxNjAwZWZiNTliYWUzYWNmMjY0NTFiZGE5MjBmZjViMTQ1ZWJkOGU1NTQ2MWYzIiwiaWF0IjoxNjg2NDE2MjA4LCJuYmYiOjE2ODY0MTYyMDgsImV4cCI6MTY4NjQxOTgwOCwic3ViIjoiIiwic2NvcGVzIjpbXX0.QWDwEQpg-gFRpUr9ci7kahSCrqoGKfObhqs0OWh2XCQUecEPsab4k2mPgln9Z6qLM_35VamqQJecgswKkU6bXkQGlWf70achYH0TeRVIQV9oT78nQ7_6AIX3llVTtIW0nHfmLimMffhIZ4wmgBm9AwDrR8FxImUnP88nWZgb8qL64e77fEXRfHjKhfxqQMCZsElDNZw6La6E0UcVegEQZ257qM3RNOYqI2M8SX9m1sc42IAcvVFPNCvKxGB6lTcg79-sxN8Ov_-EsyxBLCb66ssdNUbuLvVEnqu9RfGS8kNFvCASpqzKiQvhtgKVU9Dx559cJ9GocUWnKOj6KbuhZw";

const Petfinder = () => {

    let [dogData, setDogData] = useState([]);
    const config = {
        header: { Authorization: `Bearer ${token}`}
    }

    const dogDataHandler = async() =>{
        let data = await axios.get(
            'https://api.petfinder.com/v2/animals?types=dog',
            config
        )
        console.log(data);
    }

    useEffect(()=>{
        dogDataHandler();
    }, [])

    return (
        <div>
            <h1>FIND YOUR FRIEND</h1>
        </div>
    );
};

export default Petfinder;

// curl -d "grant_type=client_credentials&client_id=kZAhfBEeMmE5T7KUiXUzWNVchlIxP7m9ZHhFPb60IFLm6yXzYD&client_secret=f7l8Jb5SXfBm19Tgtl7zpKaJBryfU7dL5AodRnVH" https://api.petfinder.com/v2/oauth2/token

