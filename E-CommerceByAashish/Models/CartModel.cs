using System.ComponentModel.DataAnnotations;

namespace E_CommerceByAashish.Models
{
    public class CartModel
    {
        [Key]
        public int CartId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }
        public DateTime? CreatedDate { get; set; }

        public DateTime? ModifiedDate { get; set; }
    }
}
