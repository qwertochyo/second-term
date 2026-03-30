const books = [
  {
    title: "Мастер",
    author: "Булгаков"
  },
  {
    title: "Гвардия",
    author: "Булгаков"
  },
  {
    title: "Война",
    author: "Толстой"
  },
  {
    title: "Анна",
    author: "Достоевский"
  }
]

d3.select(document).on("DOMContentLoaded", () => {
  const authorsGroup = d3.group(books, (d) => d.author)

  const p = d3.select("#container")
    .selectAll("p")
    .data(authorsGroup)
    .enter()
    .append("p")
    .text((d) => `${d[0]} Выберите книгу:`);

  const selects = d3.selectAll("p")
    .append("select")
    .attr("name", "books")

  const firstOption = d3.selectAll("select")
    .append("option")
    .attr("value", 0)
    .text("Не выбрано");

  const options = d3.selectAll("select")
    .selectAll("option #id")
    .data(d => d[1])
    .enter()
    .append("option")
    .attr("value", (d, i) => i + 1)
    .text((d) => `${d.title}`)
})