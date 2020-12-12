using MiniProjectCore.Data;
using MiniProjectCore.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MiniProjectCore.Services
{
    public class SourceIdService : ISourceIdService
    {
        private readonly MiniDbContext dbContext;

        public SourceIdService(MiniDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public SourceId CreateSourceId(SourceId sourceIdOptions)
        {
            var sourceId = new SourceId { 
                Source_Code = sourceIdOptions.Source_Code,
                Source_Name = sourceIdOptions.Source_Name,
                Source_Id = sourceIdOptions.Source_Id
            };

            dbContext.SourceIds.Add(sourceId);
            dbContext.SaveChanges();
            return sourceId;
        }

        public bool DeleteSourceId(int id)
        {
            var sourceId = dbContext.SourceIds.Find(id);
            if (sourceId == null) return false;
            dbContext.SourceIds.Remove(sourceId);
            dbContext.SaveChanges();
            return true;
        }

        public List<SourceId> GetAllSourceIds()
        {
            var sourceIds = dbContext.SourceIds.ToList();
            return sourceIds;
        }

        public SourceId GetSourceId(int id)
        {
            var sourceId = dbContext.SourceIds.Find(id);
            return sourceId;
        }

        public SourceId UpdateSourceId(int id, SourceId sourceIdOptions)
        {
            var sourceId = dbContext.SourceIds.Find(id);
            sourceId.Source_Code = sourceIdOptions.Source_Code;
            sourceId.Source_Name = sourceIdOptions.Source_Name;
            sourceId.Source_Id = sourceIdOptions.Source_Id;
            dbContext.SourceIds.Update(sourceId);
            dbContext.SaveChanges();
            
            return sourceId;
        }
    }
}
