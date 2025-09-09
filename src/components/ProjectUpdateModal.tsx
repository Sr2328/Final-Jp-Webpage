import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useProjectUpdates } from '@/hooks/useProjectUpdates';
import { Clock, TrendingUp, AlertCircle } from 'lucide-react';

interface ProjectUpdateModalProps {
  children: React.ReactNode;
}

export const ProjectUpdateModal: React.FC<ProjectUpdateModalProps> = ({ children }) => {
  const { updates, getFeaturedUpdates, loading } = useProjectUpdates();
  const featuredUpdates = getFeaturedUpdates();

  if (loading) {
    return (
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Live Project Updates
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="h-32 bg-muted rounded-lg"></div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  const getUpdateIcon = (type: string) => {
    switch (type) {
      case 'construction':
        return <TrendingUp className="w-4 h-4" />;
      case 'approval':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getUpdateColor = (type: string) => {
    switch (type) {
      case 'construction':
        return 'bg-blue-500';
      case 'approval':
        return 'bg-green-500';
      case 'launch':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Live Project Updates
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {featuredUpdates.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Badge className="bg-gradient-primary text-primary-foreground">
                  Featured Updates
                </Badge>
              </h3>
              <div className="space-y-4">
                {featuredUpdates.slice(0, 3).map((update) => (
                  <Card key={update.id} className="card-premium border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getUpdateColor(update.update_type)}`}></div>
                          <span className="text-sm font-medium capitalize">{update.update_type}</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {new Date(update.update_date).toLocaleDateString('en-IN', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric'
                          })}
                        </Badge>
                      </div>
                      
                      <h4 className="font-semibold text-foreground mb-2">{update.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {update.description}
                      </p>
                      
                      {update.image_url && (
                        <div className="mt-3">
                          <img 
                            src={update.image_url} 
                            alt={update.title}
                            className="w-full h-32 object-cover rounded-md"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {updates.length > 0 && (
            <div>
              <h3 className="font-semibold mb-4">All Recent Updates</h3>
              <div className="space-y-3">
                {updates.slice(0, 10).map((update) => (
                  <Card key={update.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          {getUpdateIcon(update.update_type)}
                          <span className="font-medium text-sm">{update.title}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {new Date(update.update_date).toLocaleDateString('en-IN')}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {update.description.slice(0, 120)}...
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {updates.length === 0 && (
            <div className="text-center py-12">
              <TrendingUp className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-foreground mb-2">No Updates Yet</h3>
              <p className="text-muted-foreground">
                Project updates will appear here as they become available.
              </p>
            </div>
          )}

          <div className="flex justify-center pt-4">
            <Button variant="outline" className="w-full">
              Subscribe to Updates
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};