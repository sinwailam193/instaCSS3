var feed = new Instafeed({
  get: "tagged",
  limit: 18,
  tagName: "nature",
  clientId: "1996daee3be64d48bcd02377fa5426be"
});
feed.run();