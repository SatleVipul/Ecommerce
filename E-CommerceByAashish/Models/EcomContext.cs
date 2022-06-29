using Microsoft.EntityFrameworkCore;

namespace E_CommerceByAashish.Models
{
    public class EcomContext: DbContext
    {
        public EcomContext(DbContextOptions<EcomContext> options) : base(options)
        {
          

    }
        public DbSet<CategoryModel> tblCategory { get; set; }
        public DbSet<ProductModel> tblProduct { get; set; }

        public DbSet<CartModel> tblCart { get; set; }

    }
}
