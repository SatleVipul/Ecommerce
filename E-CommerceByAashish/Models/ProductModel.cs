using System.ComponentModel.DataAnnotations;

namespace E_CommerceByAashish.Models
{
    public class ProductModel
    {
        [Key]
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public string ProductName { get; set; }

        public string? Image { get; set; }
        public float Mrp { get; set; }

        public String Decription { get; set; }

        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }


    }
}
