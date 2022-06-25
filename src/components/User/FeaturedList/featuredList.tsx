import { Box, CardActionArea, CardMedia, Container, Grid, Typography } from "@mui/material";
import { FC } from "react";
const Featuredlist: FC = () => {
  const Value = [
    {
      img: "http://theme.hstatic.net/1000284798/1000807193/14/coll_1.jpg?v=714",
      des: "VGA - Card màn hình",
    },
    {
      img: "http://theme.hstatic.net/1000284798/1000807193/14/coll_3.jpg?v=714",
      des: "Bàn ghế Gaming",
    },
    {
      img: "http://theme.hstatic.net/1000284798/1000807193/14/coll_2.jpg?v=714",
      des: "LCD - Màn hình",
    },
    {
      img: "http://theme.hstatic.net/1000284798/1000807193/14/coll_4.jpg?v=714",
      des: "Tuỳ chọn cấu hình PC",
    },
  ];
  return (
    <Container maxWidth="lg" sx={{mb: 2 , mt:2}}>
      <Box
        sx={{
          border: 1,
          borderRadius: 1,
          p: 1,
          width: "fit-content",
          backgroundColor: "red",
          color: "white",
          mb: 2
          
        }}
      >
        <Typography variant="h5">Danh mục nổi bật</Typography>
      </Box>
      <Grid container spacing={3}>
        {Value.map((item, i) => {
          return (
            // <Grid item xs={3} key={i}>
            //   <Box>
            //     <div>
            //       <img
            //         src={`${item.img}`}
            //         style={{ width: "-webkit-fill-available" }}
            //       />
            //     </div>
            //     <Typography align="center">{item.des}</Typography>
            //   </Box>
            // </Grid>
            <Grid item xs={3} key={i}>
             <CardActionArea>
             <CardMedia
               component="img"
               image={item.img}
               alt={item.img}
             />
           </CardActionArea>
           <Typography align="center">
               {item.des}
             </Typography>
           </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Featuredlist;
