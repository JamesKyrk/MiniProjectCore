﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MiniProjectCore.Data;

namespace MiniProjectCore.Migrations
{
    [DbContext(typeof(MiniDbContext))]
    [Migration("20201212004316_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("MiniProjectCore.Model.Source", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Agent_Group")
                        .HasColumnType("TEXT");

                    b.Property<double>("Commission")
                        .HasColumnType("REAL");

                    b.Property<int>("Country_Id")
                        .HasColumnType("INTEGER");

                    b.Property<string>("HBE")
                        .HasColumnType("TEXT");

                    b.Property<string>("Log_Source")
                        .HasColumnType("TEXT");

                    b.Property<string>("Source_Code")
                        .HasColumnType("TEXT");

                    b.Property<string>("Source_Group")
                        .HasColumnType("TEXT");

                    b.Property<string>("Source_Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Sources");
                });

            modelBuilder.Entity("MiniProjectCore.Model.SourceId", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Source_Code")
                        .HasColumnType("TEXT");

                    b.Property<string>("Source_Id")
                        .HasColumnType("TEXT");

                    b.Property<string>("Source_Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("SourceIds");
                });
#pragma warning restore 612, 618
        }
    }
}
