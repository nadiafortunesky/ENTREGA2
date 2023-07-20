import { Card, CardContent, Typography } from "@mui/material";


const Home = () => {
    return (
        <div className="container"> 
         <Typography variant= "h2" sx= {{ color: "black", fontWeight: "lighter" }}>Bienvenidos a Trendy!</Typography>
         <div className="container-card">
            <Card sx={{ width: "800px", height: "240px", textAlign: "center", fontWeight:"lighter"}}>
            <CardContent>
            <Typography variant= "h6" sx= {{ color: "black", fontWeight: "lighter" }}>Donde encontraras la mejor opcion para tu entrenamiento!</Typography>

            </CardContent>

         </Card>
         </div>
         
        </div>
    )

}
export default Home;