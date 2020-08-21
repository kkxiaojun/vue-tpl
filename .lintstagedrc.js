module.exports = {
  "src/**/*.{js,vue}": filenames => {
    let files = null
    if (filenames.length < 10) {
      files = filenames.join(' ')
    } else {
      files = 'src/**/*.{js,vue,jsx}'
    }
    return [
      `eslint --fix ${files}`,
      `prettier --write ${files}`,
      `git add .`,
    ];
  }
}
