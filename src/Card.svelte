<script>
    const randomImage = Math.floor(Math.random()*24)+1
</script>

<div>
    <img src="./images/{randomImage}.jpeg" alt="A random image as background">
</div>

<style>
    div{
        max-width: 350px;
        max-height: 160px;
        margin: 3vh auto; 
    }
    img{
        max-width:100%;
        max-height:100%;
        border-radius: 16px;
        box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    }
</style>