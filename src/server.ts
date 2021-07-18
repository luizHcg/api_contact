import app from '@configs/app'

app.listen(process.env.PORT || 3333, () => {
  console.log('Server ON!')
})
