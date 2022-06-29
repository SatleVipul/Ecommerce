using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace E_CommerceByAashish.Migrations
{
    public partial class vi : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "tblProduct",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "tblProduct");
        }
    }
}
